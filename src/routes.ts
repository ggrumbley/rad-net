import { Router } from 'express';

import * as authController from './controllers/auth';

const authRouter = Router();
const testRouter = Router();

testRouter.get('/', authController.test);

authRouter.get('/register', authController.register);

export { authRouter, testRouter };
