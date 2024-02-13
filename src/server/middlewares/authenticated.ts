import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../Models/User';

interface IRequest extends Request {
  token?: string;
}

const createUserToken = async (req: IRequest, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const secret = process.env.SECRET;

  if (!secret) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Secret invalided!',
    });
  }

  const userExists = await User.findOne({ where: { email } });

  if (!userExists) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'User not found!',
    });
  }

  const validatedPassword = await bcrypt.compare(password, userExists.password);

  if (!validatedPassword) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Password invalid!',
    });
  }

  const payload = {
    id: userExists.id,
    email: userExists.email,
    role: userExists.role,
  };

  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  req.token = token;

  next();

  res.status(StatusCodes.OK).json({
    message: 'Authenticated user!',
    token: token,
    user_id: userExists.id,
  });
};

export default createUserToken;