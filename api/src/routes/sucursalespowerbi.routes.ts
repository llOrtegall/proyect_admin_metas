import { getSucursalesPowerBi, getSucursalPowerBi, updateSucursalPowerBi} from '../controllers/sucursalespowerbi.controller';
import { Router } from 'express';

export const RoutesPowerBi = Router();

RoutesPowerBi.get('/sucursalesPB', getSucursalesPowerBi);

RoutesPowerBi.get('/sucursalPB/:codigo', getSucursalPowerBi);

RoutesPowerBi.post('/editarSucursalPB', updateSucursalPowerBi);