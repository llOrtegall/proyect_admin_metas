import { PowerBI } from '../connections/powerbi';
import { Request, Response } from 'express';
import { z } from 'zod';

export const getLogueos = async (req: Request, res: Response) => {
  const { fecha } = req.query;

  const fechaSchema = z.optional(z.string());
  const result = fechaSchema.safeParse(fecha);

  const fechaQuery = result.data && result.data.length > 0 ? result.data.slice(0, 10) : null;

  try {
    const [rows] = await PowerBI.query(
      `SELECT HL.SUCURSAL, V.NOMBRES, V.DOCUMENTO, V.NOMBRECARGO, HL.FECHACREATE, HL.FECHAUPDATE
       FROM HIST_USUARIOS_LOGUEADOS HL
       JOIN VENDEDORES V ON SUBSTR(HL.USERNAME, 3) = V.DOCUMENTO
       WHERE HL.FECHA_LOGIN = COALESCE(:fechaQuery, CURDATE())`,
      {
        replacements: { fechaQuery },
      }
    );

    console.log(rows[0]);
    

    res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};