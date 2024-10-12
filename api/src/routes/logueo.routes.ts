import { getLogueos } from '../controllers/logueo.controller';
import { Router } from 'express';

export const logueRouter = Router();

logueRouter.get('/logueo', getLogueos);
