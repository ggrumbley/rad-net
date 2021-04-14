import 'reflect-metadata';
import { createConnection } from 'typeorm';

import * as Koa from 'koa';
import * as Router from '@koa/router';
import * as logger from 'koa-logger';
import * as json from 'koa-json';

import authRoutes from './routes/auth';

const app = new Koa();
const router = new Router();

app.use(json());
app.use(logger());

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello world!' };

  await next();
});

// Routes
app.use('/api/auth', authRoutes);

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, async () => {
  console.log(`Koa running at http://localhost:${3000}`);
  try {
    await createConnection();
    console.log('DB Connected');
  } catch (error) {
    console.log(error);
  }
});
