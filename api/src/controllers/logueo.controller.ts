import { Logueo } from '../model/logueo.model';
import { Request, Response } from 'express';
import { fn } from 'sequelize';
import { z } from 'zod';

export const getLogueos = async (req: Request, res: Response) => {
  const { fecha } = req.query;

  const fechaSchema = z.optional(z.string());
  const result = fechaSchema.safeParse(fecha);

  const fechaQuery = result.data && result.data.length > 0 ? result.data : fn('CURDATE');

  try {
    const sugeridos = await Logueo.findAll({
      attributes: { exclude: ['fecha_login'] },
      where: { fecha_login: fechaQuery },
    });

    res.status(200).json(sugeridos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}