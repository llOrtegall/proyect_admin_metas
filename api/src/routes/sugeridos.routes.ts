import { getSugeridos } from '../controllers/sugeridos.controller';
import { Router } from 'express';

export const SugeridosRouter = Router();

SugeridosRouter.get('/sugeridos', getSugeridos);
