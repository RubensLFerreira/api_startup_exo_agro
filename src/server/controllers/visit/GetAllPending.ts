import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Visit from '../../Models/Visit';
import Client from '../../Models/Client';
import User from '../../Models/User';

export const getAllPendingVisits = async (req: Request, res: Response) => {
  try {
    const allVisits = await Visit.findOne({
      where: {
        status: 'pending'
      },
      include: [
        {
          model: Client,
          include: [
            { model: User }
          ]
        }
      ]
    });

    res.status(StatusCodes.OK).json(allVisits);
  } catch (error: any) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Error when getting all records',
      error: error
    });
  }
};