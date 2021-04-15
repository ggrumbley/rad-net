import 'reflect-metadata';
import { createConnection } from 'typeorm';

import express from 'express';
import morgan from 'morgan';

import { authRouter, testRouter } from './routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/', testRouter);
app.use('/api/auth', authRouter);

app.listen(3000, async () => {
  console.log(`Server running at http://localhost:${3000}`);
  try {
    await createConnection();
    console.log('DB Connected');
  } catch (error) {
    console.log(error);
  }
});
