import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Visit from '../../Models/Visit';

export const getAllVisits = async (req: Request, res: Response) => {
  try {
    const allVisits = await Visit.findAll();

    res.status(StatusCodes.OK).json(allVisits);
  } catch (error: any) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Error when getting all records',
      error: error
    });
  }
};