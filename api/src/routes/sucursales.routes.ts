import { createSucursal } from '../controllers/sucursales.controller';
import { Router } from 'express';

export const RouterSucursal = Router();

RouterSucursal.get('/sucursal_powerbi', createSucursal);