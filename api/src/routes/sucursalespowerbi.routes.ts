import { getSucursalesPowerBi } from '../controllers/sucursalespowerbi.controller';
import { Router } from 'express';

export const RoutesPowerBi = Router();

RoutesPowerBi.get('/sucursalesPB', getSucursalesPowerBi);