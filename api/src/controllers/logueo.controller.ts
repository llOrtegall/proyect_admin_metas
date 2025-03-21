import { getAllLogueos } from '../services/MySqlPower';
import { Request, Response } from 'express';

export const getLogueos = async (req: Request, res: Response) => {
  const fecha = req.query.fecha as string;

  try {
    const rows = await getAllLogueos(fecha);

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los logueos' });
  }
};