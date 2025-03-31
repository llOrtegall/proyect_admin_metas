import { SugeridosVendedorPB } from '../model/sugeridos.model';
import { Request, Response } from 'express';
import { fn } from 'sequelize';
import { z } from 'zod';

export const getSugeridos = async (req: Request, res: Response) => {
  const params = req.query;

  const schema = z.object({
    fecha: z.string().optional(),
    zona: z.string().min(3).max(10)
  })

  const { success, data, error } = schema.safeParse(params)

  if (!success) {
    return res.status(400).json({ error: error.format() });
  }

  const { fecha, zona } = data;

  try {
    const query = `
      SELECT
        SV.ID, 
        V.DOCUMENTO,
        SV.FECHA,
        V.NOMBRES,
        V.NOMBRECARGO,
        SV.SUCURSAL,
        S.NOMBRE AS NOMBRE_SUCURSAL,
        S.TIPO AS TIPO,
        SV.CATEGORIA, 
        SV.PRODUCTO, 
        SV.VTA_SUGERIDO AS VALOR_SUGERIDO, 
        SV.META_VALOR AS VALOR_META,
        SV.ESTADO
      FROM SUGERIDOSVENDEDOR AS SV
      JOIN VENDEDORES AS V
        ON SUBSTRING(SV.LOGIN, 3) = V.DOCUMENTO
      JOIN SUCURSALES AS S
        ON SV.SUCURSAL = S.CODIGO
      WHERE SV.FECHA = :fecha
      AND SV.ZONA = :zona
    `;
  
    const result = await SugeridosVendedorPB.sequelize?.query(query, {
      replacements: { fecha: fecha || new Date().toISOString().split('T')[0], zona },
    });
  
    const [rows, dates] = result ?? [[], []]; // Provide a fallback for undefined
  
    return res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching Sugeridos:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}