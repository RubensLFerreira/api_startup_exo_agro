import 'dotenv/config';

import { StatusCodes } from 'http-status-codes';

import jwt from 'jsonwebtoken';
import getToken from '../utils/getToken.js';

const checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Access denied!' });
  }

  const token = getToken(req);

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Access denied!' });
  }

  const secret = process.env.JWT_SECRET;

  try {
    const verified = jwt.verify(token, secret);
    req.usuario = verified;
    next();
  } catch (error) {
    console.error('Invalid token!', error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Invalid token!' });
  }
};

export default checkToken;
