import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Client from '../../Models/Client';
import User from '../../Models/User';

export const getAllClients = async (_: Request, res: Response) => {
  try {
    const clients = await Client.findAll({ include: User });

    res.status(StatusCodes.OK).json(clients);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Error when getting records' });
  }
};