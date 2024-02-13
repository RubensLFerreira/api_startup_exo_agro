import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Visit from '../../Models/Visit';

export const getAllPendingVisits = async (req: Request, res: Response) => {
  const allPendingVisits = await Visit.findAll({
    where: {
      status: 'pending'
    }
  });

  if(allPendingVisits.length === 0) return res.status(StatusCodes.NOT_FOUND).json({
    message: 'No pending visits found'
  });

  try {
    res.status(StatusCodes.OK).json(allPendingVisits);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Error when getting all pending visits',
      error: error
    });
  }
};