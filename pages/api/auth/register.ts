import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

import prisma from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return;

  const { email, username, password } = req.body;

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) res.status(400).json({ existingUser: 'Email or Username is already taken' });

    // Hash the password
    const hashedPW = await bcrypt.hash(password, 6);

    // Create the user
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPW,
      },
    });

    res.json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
};
