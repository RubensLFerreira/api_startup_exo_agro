import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Visit from '../../Models/Visit';

export const getVisitById = async (req: Request, res: Response) => {
  try {
    const visit = await Visit.findByPk(req.params.id);

    if (!visit) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Record not found'
      });
    }

    res.status(StatusCodes.OK).json(visit);
  } catch (error: any) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Error when getting record',
      error: error
    });
  }
};