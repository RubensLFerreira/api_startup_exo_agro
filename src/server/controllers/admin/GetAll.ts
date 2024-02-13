import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Admin from '../../Models/Admin';

export const getAllAdmin = async (_: Request, res: Response) => {
  try {
    const admins = await Admin.findAll();

    res.status(StatusCodes.OK).json(admins);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        message: 'Error when getting all records',
        error: error
      });
  }
};