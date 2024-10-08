interface Products {
  ASTRO: number
  CHANCE: number
  BETPLAY: number
  CHANCE_MILLONARIO: number
  DOBLECHANCE: number
  GANE5: number
  PAGAMAS: number
  PAGATODO: number
  PATA_MILLONARIA: number
  LOTERIA_VIRTUAL: number
  LOTERIA_FISICA: number
  RECARGAS: number
  SOAT: number
  RECAUDOS: number
  GIROS: number
  PROMO1: number
  PROMO2: number
  MT_ASTRO: number
  MT_CHANCE: number
  MT_BETPLAY: number
  MT_CHANCE_MILLONARIO: number
  MT_DOBLECHANCE: number
  MT_GANE5: number
  MT_PAGAMAS: number
  MT_PAGATODO: number
  MT_PATA_MILLONARIA: number
  MT_LOTERIA_VIRTUAL: number
  MT_LOTERIA_FISICA: number
  MT_RECARGAS: number
  MT_SOAT: number
  MT_RECAUDOS: number
  MT_GIROS: number
  META_PROMO1: number
  META_PROMO2: number
  PROMEDIO_DIARIO_ASTRO: number
  PROMEDIO_DIARIO_CHANCE: number
  PROMEDIO_DIARIO_BETPLAY: number
  PROMEDIO_DIARIO_CHMILL: number
  PROMEDIO_DIARIO_DOBLECHANCE: number
  PROMEDIO_DIARIO_GANE5: number
  PROMEDIO_DIARIO_PAGAMAS: number
  PROMEDIO_DIARIO_PAGATODO: number
  PROMEDIO_DIARIO_PATAMI: number
  PROMEDIO_DIARIO_LF: number
  PROMEDIO_DIARIO_LV: number
  PROMEDIO_DIARIO_RECARGAS: number
  PROMEDIO_DIARIO_SOAT: number
  PROMEDIO_DIARIO_RECAUDOS: number
  PROMEDIO_DIARIO_GIROS: number
}

interface InfoPdv {
  NOMBRE: string | null
  CODIGO: number
  SUPERVISOR: string
  CATEGORIA: string
  meta: Products
}

export type Sucursales = InfoPdv[]
