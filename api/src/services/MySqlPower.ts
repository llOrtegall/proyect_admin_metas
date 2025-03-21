import { PoolConnection } from '../connections/MySqlpowerbi';
import { RowDataPacket } from 'mysql2';

interface Logueo extends RowDataPacket {
  SUCURSAL: number;
  DOCUMENTO: string;
  NOMBRES: string;
  FECHA_LOGIN: Date;
  FECHACREATE: Date;
  FECHAUPDATE: Date;
}

async function SelectQuery<T>(queryStrg: string, params: (string | number)[]): Promise<T[]> {
  try {
    const [results] = await PoolConnection().execute(queryStrg, params);
    return results as T[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getAllLogueos(fecha: string): Promise<Logueo[]> {
  const query = `
    SELECT HL.SUCURSAL, V.DOCUMENTO, V.NOMBRES, HL.FECHA_LOGIN, HL.FECHACREATE, HL.FECHAUPDATE
    FROM HIST_USUARIOS_LOGUEADOS AS HL
    JOIN VENDEDORES V ON SUBSTR(HL.USERNAME, 3) = V.DOCUMENTO
    WHERE HL.FECHA_LOGIN = COALESCE(?, CURDATE());
  `;
  return SelectQuery<Logueo>(query, [fecha]);
}

export { getAllLogueos };