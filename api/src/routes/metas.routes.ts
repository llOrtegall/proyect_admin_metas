import { getMetasController, createMetaController, getProductDetailController, getVentaHoraController } from '../controllers/metas.controller'
import { Router } from 'express'

export const RouterMetas = Router()

RouterMetas.get('/metas', getMetasController)

RouterMetas.get('/ventaHora/:codigo', getVentaHoraController)

RouterMetas.get('/product/:name', getProductDetailController)

RouterMetas.get('/createDateFalse', createMetaController)