import 'reflect-metadata';
import { createConnection } from 'typeorm';

import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send({ hello: 'Worlds!' });
});

app.listen(3000, async () => {
  console.log(`Server running at http://localhost:${3000}`);
  try {
    await createConnection();
    console.log('DB Connected');
  } catch (error) {
    console.log(error);
  }
});
