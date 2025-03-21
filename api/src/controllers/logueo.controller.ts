import { Request, Response } from 'express';
import { z } from 'zod';
import { getAllLogueos } from '../services/MySqlPower';

const schemaParams = z.object({
  fecha: z.string().optional().default(''),
  empresa: z.string().min(3).max(16)
})

export const getLogueos = async (req: Request, res: Response) => {
  const params = req.query

  const { success, data, error } = schemaParams.safeParse(params);

  if (!success) {
    return res.status(400).json({ message: error.format(), });
  }

  const { fecha, empresa } = data;

  try {
    const rows = await getAllLogueos(fecha, empresa);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los logueos' });
  }
};