import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Agronomist from '../../Models/Agronomist';

export const getAllAgronomist = async (_: Request, res: Response) => {
  try {
    const agronomists = await Agronomist.findAll();

    res.status(StatusCodes.OK).json(agronomists);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        message: 'Error when getting all records',
        error: error
      });
  }
};