import { Request, Response } from 'express';

export const test = async (req: Request, res: Response) => {
  res.send({ hello: 'Worlds!' });
  console.log(req.body);
  console.log(res);
};

export const register = async (req: Request, res: Response) => {
  res.send({ user: 'Register HERE!' });
};
