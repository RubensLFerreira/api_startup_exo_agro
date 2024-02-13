import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Visit from '../../Models/Visit';
import Client from '../../Models/Client';
import Agronomist from '../../Models/Agronomist';

import visitSchema from '../../validations/visitSchema';

export const createVisit = async (req: Request, res: Response) => {
  const requestData = req.body;
  const file = req.file;

  // if (!file) {
  //   return res.status(StatusCodes.BAD_REQUEST).json({
  //     error: 'Photo is required',
  //   });
  // }

  if (!requestData) {
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
    requestData.photo = file?.filename;
    const visitValidated = await visitSchema.validate(requestData);

    const newVisit = await Visit.create(visitValidated);

    res.status(StatusCodes.CREATED).json(newVisit);
  } catch (error: any) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Error when creating a new record',
      validator: error.errors
    });
  }
};