import { Request, Response } from 'express';
import { Meta } from '../model/metas.model';
import { fn, Op } from 'sequelize';
import { faker } from '@faker-js/faker';
import { Sucursal } from '../model/sucursales.model';

const productDefinitions = [
  { key: 'chance', name: 'Chance', metaKey: 'meta_dia_chance' },
  { key: 'pagamas', name: 'Pagamas', metaKey: 'meta_dia_pagamas' },
  { key: 'pagatodo', name: 'PagaTodo', metaKey: 'meta_dia_pagatodo' },
  { key: 'doblechance', name: 'DobleChance', metaKey: 'meta_dia_doblechance' },
  { key: 'chance_millonario', name: 'ChanceMillonario', metaKey: 'meta_dia_chmill' },
  { key: 'astro', name: 'Astro', metaKey: 'meta_dia_astro' },
  { key: 'loteria_fisica', name: 'LoteriaFisica', metaKey: 'meta_dia_lf' },
  { key: 'loteria_virtual', name: 'LoteriaVirtual', metaKey: 'meta_dia_lv' },
  { key: 'betplay', name: 'BetPlay', metaKey: 'meta_dia_betplay' },
  { key: 'giros', name: 'Giros', metaKey: 'meta_dia_giros' },
  { key: 'soat', name: 'Baloto', metaKey: 'meta_dia_soat' },
  { key: 'recargas', name: 'Recargas', metaKey: 'meta_dia_recargas' }
];

type ReduceType = {
  chance: number;
  pagamas: number;
  pagatodo: number;
  doblechance: number;
  chance_millonario: number;
  astro: number;
  loteria_fisica: number;
  loteria_virtual: number;
  betplay: number;
  giros: number;
  soat: number;
  recargas: number;
  meta_dia_chance: number;
  meta_dia_pagamas: number;
  meta_dia_pagatodo: number;
  meta_dia_doblechance: number;
  meta_dia_chmill: number;
  meta_dia_astro: number;
  meta_dia_lf: number;
  meta_dia_lv: number;
  meta_dia_betplay: number;
  meta_dia_giros: number;
  meta_dia_soat: number;
  meta_dia_recargas: number;
};

function reduceProducts(results: Meta[]): ReduceType {
  const initialReduce: ReduceType = {
    chance: 0,
    pagamas: 0,
    pagatodo: 0,
    doblechance: 0,
    chance_millonario: 0,
    astro: 0,
    loteria_fisica: 0,
    loteria_virtual: 0,
    betplay: 0,
    giros: 0,
    soat: 0,
    recargas: 0,
    meta_dia_chance: 0,
    meta_dia_pagamas: 0,
    meta_dia_pagatodo: 0,
    meta_dia_doblechance: 0,
    meta_dia_chmill: 0,
    meta_dia_astro: 0,
    meta_dia_lf: 0,
    meta_dia_lv: 0,
    meta_dia_betplay: 0,
    meta_dia_giros: 0,
    meta_dia_soat: 0,
    meta_dia_recargas: 0
  };

  return results.reduce((acc: ReduceType, curr) => {
    acc.chance += curr.chance;
    acc.pagamas += curr.pagamas;
    acc.pagatodo += curr.pagatodo;
    acc.doblechance += curr.doblechance;
    acc.chance_millonario += curr.chance_millonario;
    acc.astro += curr.astro;
    acc.loteria_fisica += curr.loteria_fisica;
    acc.loteria_virtual += curr.loteria_virtual;
    acc.betplay += curr.betplay;
    acc.giros += curr.giros;
    acc.soat += curr.soat;
    acc.recargas += curr.recargas;
    acc.meta_dia_chance += curr.promedio_diario_chance;
    acc.meta_dia_pagamas += curr.promedio_diario_pagamas;
    acc.meta_dia_pagatodo += curr.promedio_diario_pagatodo;
    acc.meta_dia_doblechance += curr.promedio_diario_doblechance;
    acc.meta_dia_chmill += curr.promedio_diario_chmill;
    acc.meta_dia_astro += curr.promedio_diario_astro;
    acc.meta_dia_lf += curr.promedio_diario_lf;
    acc.meta_dia_lv += curr.promedio_diario_lv;
    acc.meta_dia_betplay += curr.promedio_diario_betplay;
    acc.meta_dia_giros += curr.promedio_diario_giros;
    acc.meta_dia_soat += curr.promedio_diario_soat;
    acc.meta_dia_recargas += curr.promedio_diario_recargas;
    return acc;
  }, initialReduce);
}

function calcularPorcentaje(vtaDia: number, metaDia: number): number {
  const porcentaje = Math.min((vtaDia / metaDia) * 100, 100);
  return parseFloat(porcentaje.toFixed(2));
}

export const getMetasController = async (req: Request, res: Response) => {

  try {
    const results = await Meta.findAll({
      where: {
        fecha: { [Op.eq]: fn('CURDATE') },
        zona: { [Op.eq]: 39627 }
      }
    })

    const reduce = reduceProducts(results);
    
    const products = productDefinitions.map((product, index) => ({
      id: ++index,
      producto: product.name,
      vta_dia: reduce[product.key as keyof ReduceType],
      meta_dia: reduce[product.metaKey as keyof ReduceType],
      porcentaje: calcularPorcentaje(reduce[product.key as keyof ReduceType], reduce[product.metaKey as keyof ReduceType])
    })).sort((a, b) => b.porcentaje - a.porcentaje);

    const metaTotalDiaChance = reduce.meta_dia_chance + reduce.meta_dia_pagamas + reduce.meta_dia_pagatodo + reduce.meta_dia_astro
    const ventaTotalDiaChance = reduce.chance + reduce.pagamas + reduce.pagatodo + reduce.astro
    const porcentajeTotalDiaChance = calcularPorcentaje(ventaTotalDiaChance, metaTotalDiaChance);

    return res.status(200).json({ productos: products, metaDia: metaTotalDiaChance, ventaDia: ventaTotalDiaChance, porcentaje: porcentajeTotalDiaChance });
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las metas' });
  }

}

export const createMetaController = async (req: Request, res: Response) => {

  try {
    await Meta.sync();
    await Meta.create({
      sucursal: faker.number.int({ min: 1000, max: 5000 }),
      zona: 39627,
      chance: faker.number.int({ min: 1250, max: 850250 }),
      pagamas: faker.number.int({ min: 1250, max: 850250 }),
      pagatodo: faker.number.int({ min: 1250, max: 850250 }),
      chance_millonario: faker.number.int({ min: 1250, max: 850250 }),
      doblechance: faker.number.int({ min: 1250, max: 850250 }),
      astro: faker.number.int({ min: 1250, max: 850250 }),
      loteria_fisica: faker.number.int({ min: 1250, max: 850250 }),
      loteria_virtual: faker.number.int({ min: 1250, max: 850250 }),
      betplay: faker.number.int({ min: 1250, max: 850250 }),
      giros: faker.number.int({ min: 1250, max: 850250 }),
      soat: faker.number.int({ min: 1250, max: 850250 }),
      recargas: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_chance: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_pagamas: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_pagatodo: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_doblechance: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_chmill: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_astro: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_lf: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_lv: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_betplay: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_giros: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_soat: faker.number.int({ min: 1250, max: 850250 }),
      promedio_diario_recargas: faker.number.int({ min: 1250, max: 850250 })
    });

    return res.status(201).json('Meta creada correctamente');
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al crear la meta' });
  }
}

interface ProductosParserType {
  Chance: string;
  Pagamas: string;
  PagaTodo: string;
  DobleChance: string;
  ChanceMillonario: string;
  Astro: string;
  LoteriaFisica: string;
  LoteriaVirtual: string;
  BetPlay: string;
  Giros: string;
  Baloto: string;
  Recargas: string;
}

const ProductosParser: ProductosParserType = {
  Chance: 'chance',
  Pagamas: 'pagamas',
  PagaTodo: 'pagatodo',
  DobleChance: 'doblechance',
  ChanceMillonario: 'chance_millonario',
  Astro: 'astro',
  LoteriaFisica: 'loteria_fisica',
  LoteriaVirtual: 'loteria_virtual',
  BetPlay: 'betplay',
  Giros: 'giros',
  Baloto: 'soat',
  Recargas: 'recargas'
}

function returnProductKey(name: string): string {
  return ProductosParser[name as keyof ProductosParserType];
}

export const getProductDetailController = async (req: Request, res: Response) => {
  const { name } = req.params;

  if(!name){
    return res.status(400).json({ message: 'El nombre del producto es requerido' });  
  }
  
  try {
    const results = await Meta.findAll({
      attributes: [['sucursal', 'codigo'], [returnProductKey(name), 'venta']],
      where: {
        fecha: { [Op.eq]: fn('CURDATE') },
        zona: { [Op.eq]: 39627 }
      },
      include: [
        {
          model: Sucursal,
          attributes: ['nombre', 'direccion', 'categoria', 'version'],
        }
      ],
      order: [[returnProductKey(name), 'DESC']]
    });

    return res.status(200).json(results);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al obtener el detalle del producto' });
  }
}