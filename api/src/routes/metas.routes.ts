import { getMetasController, createMetaController } from '../controllers/metas.controller'
import { Router } from 'express'

export const RouterMetas = Router()

RouterMetas.get('/metas', getMetasController)

RouterMetas.get('/createDateFalse', createMetaController)