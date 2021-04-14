import { Context } from 'koa';
import * as Router from '@koa/router';
import { User } from '../models/User';

const register = async (ctx: Context) => {
  ctx.req.ctx.body = { msg: 'Hello auth!' };
};

const router = Router();
router.get('/register', register);

export default router;
