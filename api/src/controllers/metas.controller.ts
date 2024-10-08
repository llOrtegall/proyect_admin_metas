import { Request, Response } from 'express';
import { Meta } from '../model/metas.model';
import { fn, Op } from 'sequelize';

const productDefinitions = [
  { key: 'chance', name: 'Chance', metaKey: 'meta_dia_chance' },
  { key: 'pagamas', name: 'Pagamás', metaKey: 'meta_dia_pagamas' },
  { key: 'pagatodo', name: 'PagaTodo', metaKey: 'meta_dia_pagatodo' },
  { key: 'doblechance', name: 'DobleChance', metaKey: 'meta_dia_doblechance' },
  { key: 'chance_millonario', name: 'Chance Millonario', metaKey: 'meta_dia_chmill' },
  { key: 'astro', name: 'Astro', metaKey: 'meta_dia_astro' },
  { key: 'loteria_fisica', name: 'Lotería Física', metaKey: 'meta_dia_lf' },
  { key: 'loteria_virtual', name: 'Lotería Virtual', metaKey: 'meta_dia_lv' },
  { key: 'betplay', name: 'BetPlay', metaKey: 'meta_dia_betplay' },
  { key: 'giros', name: 'Giros', metaKey: 'meta_dia_giros' },
  { key: 'soat', name: 'SOAT', metaKey: 'meta_dia_soat' },
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

export const getMetasController = async (req: Request, res: Response) => {

  try {
    const results = await Meta.findAll({
      where: {
        fecha: { [Op.eq]: fn('CURDATE') },
        zona: { [Op.eq]: 39627 }
      }
    })

    const reduce = reduceProducts(results);
    
    const products = productDefinitions.map(product => ({
      producto: product.name,
      vta_dia: reduce[product.key as keyof ReduceType],
      meta_dia: reduce[product.metaKey as keyof ReduceType]
    })).sort((a, b) => b.vta_dia - a.vta_dia);

    const metaTotalDiaChance = reduce.meta_dia_chance + reduce.meta_dia_pagamas + reduce.meta_dia_pagatodo + reduce.meta_dia_astro
    const ventaTotalDiaChance = reduce.chance + reduce.pagamas + reduce.pagatodo + reduce.astro

    return res.status(200).json({ productos: products, metaDia: metaTotalDiaChance, ventaDia: ventaTotalDiaChance });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }

}