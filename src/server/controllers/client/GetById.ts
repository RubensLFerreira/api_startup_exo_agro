import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Client from '../../Models/Client';

export const getClientById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Id client is required' });
  }

  const clientExists = await Client.findByPk(id);

  if (!clientExists) {
    return res.status(StatusCodes.NOT_FOUND)
      .json({ message: 'Client not found' });
  }

  try {
    const client = await Client.findByPk(id);

    res.status(StatusCodes.OK).json({ client });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        message: 'Error when getting record',
        error: error.message
      });
  }
};