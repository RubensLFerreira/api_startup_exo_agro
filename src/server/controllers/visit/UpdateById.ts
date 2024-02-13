import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Visit from '../../Models/Visit';
import Client from '../../Models/Client';
import Agronomist from '../../Models/Agronomist';

export const updateVisitById = async (req: Request, res: Response) => {
  const requestData = req.body;
  const file = req.file;
  const { id } = req.params;

  if (!requestData ) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Request body is required',
    });
  }

  const clientExist = await Client.findByPk(requestData.client_id);

  if (!clientExist) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Client does not exist',
    });
  }

  const agronomistExist = await Agronomist.findByPk(requestData.agronomist_id);

  if (!agronomistExist) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Agronomist does not exist',
    });
  }

  try {
    const visit = await Visit.findByPk(id);

    if (!visit) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Visit not found',
      });
    }

    requestData.photo = file?.filename;
    await visit.update(requestData);

    res.status(StatusCodes.OK).json(visit);
  } catch (error: any) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Error when updating the record',
      validator: error.errors
    });
  }
};