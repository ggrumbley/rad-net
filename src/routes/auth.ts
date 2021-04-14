import * as Router from '@koa/router';
import { User } from '../models/User';

const register = async (ctx, next) => {
  ctx.body = { msg: 'Hello world!' };

  await next();
};

const router = Router();
router.post('/register', register);

export default router;
