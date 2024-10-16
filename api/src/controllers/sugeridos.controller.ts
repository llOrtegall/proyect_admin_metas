import { Sugeridos } from '../model/sugeridos.model';
import { Request, Response } from 'express';
import { fn } from 'sequelize';
import { z } from 'zod';

export const getSugeridos = async (req: Request, res: Response) => {
  const { fecha } = req.query;

  const fechaSchema = z.optional(z.string());
  const result = fechaSchema.safeParse(fecha);

  const fechaQuery = result.data && result.data.length > 0 ? result.data.slice(0, 10) : fn('CURDATE');

  try {
    const sugeridos = await Sugeridos.findAll({
      attributes: { exclude: ['FECHA', 'ZONA',] },
      where: { FECHA: fechaQuery, ZONA: 39627 },
    });

    const sugeridosMap = sugeridos.map( sug => ({
      sucursal: sug.SUCURSAL,
      documento: sug.USUARIO.split('CV')[1],
      nombres: sug.NOMBRES,
      sugerido1: sug.SUGERIDO1,
      sugerido2: sug.SUGERIDO2,
      venta_sugerido: sug.VTA_CHANCE + sug.VTA_PAGAMAS + sug.VTA_PAGATODO + sug.VTA_GANE5 + sug.VTA_PATA_MILLONARIA + sug.VTA_DOBLECHANCE + sug.VTA_CHANCE_MILLONARIO,
      meta_sugerido1: sug.META_SUG1,
      meta_sugerido2: sug.META_SUG2
    }))

    res.json(sugeridosMap.sort((a, b) => b.venta_sugerido - a.venta_sugerido));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}