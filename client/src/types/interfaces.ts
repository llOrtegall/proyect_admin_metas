export interface SucursalPowerBi {
  ZONA: string;
  CCOSTO: string;
  CODIGO: string;
  NOMBRE: string;
  DIRECCION: string;
  TIPO: string;
  DISPOSITIVO: string;
  SUPERVISOR: string;
  CANAL: string;
  CATEGORIA: string;
  HORA_ENTRADA: string;
  HORA_SALIDA: string;
  HORA_ENTRADA_FES: string;
  HORA_SALIDA_FES: string;
  SUBZONA: string;
  CELULA: string;
  HORAS_ORDINARIAS: number;
  HORAS_FESTIVAS: number;
  ESTADO: string;
}

export interface HoraDispoSucursal {
  ZONA: string;
  CCOSTO: string;
  CODIGO: string;
  HABIL: number;
  FESTIVO: number;
  HORADISPO: string;
  VERSION: string;
}

export interface Products {
  producto: string
  vta_dia: number
  meta_dia: number
  porcentaje: number
}

export interface ResponseProducts {
  productos: Products[]
  metaDia: number
  ventaDia: number
  porcentaje: number
}

export interface User {
  id: string;
  names: string,
  lastnames: string,
  username: string,
  email: string,
  company: string,
  process: string,
  sub_process: string,
}
