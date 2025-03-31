export enum Estado {
  Enprogreso = "ENPROGRESO",
  Inicial = "INICIAL",
  Superado = "SUPERADO",
}

export interface SugeridosInterface {
  ID:              number;
  DOCUMENTO:       string;
  NOMBRES:         string;
  FECHA:           string;
  NOMBRECARGO:     string;
  SUCURSAL:        string;
  NOMBRE_SUCURSAL: string;
  TIPO:            string;
  CATEGORIA:       string;
  PRODUCTO:        string;
  VALOR_SUGERIDO:  number;
  VALOR_META:      number;
  ESTADO:          Estado;
}
