import { Request, Response } from 'express';
import { validate } from 'class-validator';

import { User } from '../models/User';
export const test = async (req: Request, res: Response) => {
  res.send({ hello: 'Worlds!' });
  console.log(req.body);
  console.log(res);
};

export const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  try {
    let errors: any = {};
    const emailUser = await User.findOne({ email });
    const usernameUser = await User.findOne({ username });

    if (emailUser) errors.email = 'Email is already taken';
    if (usernameUser) errors.username = 'Username is already taken';

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    // TODO: Create the user
    const user = new User({ email, username, password });

    errors = await validate(user);
    if (errors.length > 0) return res.status(400).json({ errors });

    await user.save();

    return res.json(user);
  } catch (error) {
    console.log(error);

    return res.status(500).json(error);
  }
};
