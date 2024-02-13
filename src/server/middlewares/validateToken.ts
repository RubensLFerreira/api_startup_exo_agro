import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

interface IRequest extends Request {
  user?: any
}

const validateToken = (req: IRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Token not found' });
  };

  const secret = process.env.SECRET;

  if (!secret) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Secre not found!' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;

    next();

  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export default validateToken;