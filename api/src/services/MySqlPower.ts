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

async function getAllLogueos(fecha: string, empresa: string): Promise<Logueo[]> {

  const company = empresa === 'Multired' ? "39629, 39630, 39631" : "39632";

  const query = `
    SELECT HL.SUCURSAL, V.DOCUMENTO, V.NOMBRES, V.NOMBRECARGO, HL.FECHA_LOGIN, HL.FECHACREATE, HL.FECHAUPDATE
    FROM HIST_USUARIOS_LOGUEADOS AS HL
    JOIN VENDEDORES V ON SUBSTR(HL.USERNAME, 3) = V.DOCUMENTO
    WHERE HL.FECHA_LOGIN = COALESCE(?, CURDATE()) AND V.CCOSTO IN (${company});
  `;
  return SelectQuery<Logueo>(query, [fecha]);
}

export { getAllLogueos };