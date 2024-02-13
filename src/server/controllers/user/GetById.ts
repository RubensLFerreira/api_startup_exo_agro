import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from '../../Models/User';

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Id user is required' });
  }

  const userExists = await User.findByPk(id);

  if (!userExists) {
    return res.status(StatusCodes.NOT_FOUND)
      .json({ message: 'User not found' });
  }

  try {
    const user = await User.findByPk(id);

    res.status(StatusCodes.OK).json({ user });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        message: 'Error when getting record',
        error: error.message
      });
  }
};