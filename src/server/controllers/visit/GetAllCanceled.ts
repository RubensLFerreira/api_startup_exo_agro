import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Visit from '../../Models/Visit';

export const getAllCanceledVisits = async (req: Request, res: Response) => {
  const allCanceledVisits = await Visit.findAll({
    where: {
      status: 'canceled'
    }
  });

  if(allCanceledVisits.length === 0) return res.status(StatusCodes.NOT_FOUND).json({
    message: 'No canceled visits found'
  });

  try {
    res.status(StatusCodes.OK).json(allCanceledVisits);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Error when getting all canceled visits',
      error: error
    });
  }
};