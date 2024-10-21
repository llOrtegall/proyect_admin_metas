import { getSucursalesPowerBi, getSucursalPowerBi} from '../controllers/sucursalespowerbi.controller';
import { Router } from 'express';

export const RoutesPowerBi = Router();

RoutesPowerBi.get('/sucursalesPB', getSucursalesPowerBi);

RoutesPowerBi.get('/sucursalPB/:codigo', getSucursalPowerBi);