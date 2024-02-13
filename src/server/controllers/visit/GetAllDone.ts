import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Visit from '../../Models/Visit';

export const getAllDoneVisits = async (req: Request, res: Response) => {
  const allDoneVisits = await Visit.findAll({
    where: {
      status: 'done'
    }
  });

  if(allDoneVisits.length === 0) return res.status(StatusCodes.NOT_FOUND).json({
    message: 'No done visits found'
  });

  try {
    res.status(StatusCodes.OK).json(allDoneVisits);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Error when getting all done visits',
      error: error
    });
  }
};