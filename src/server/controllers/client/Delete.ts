import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import User from '../../Models/User';

export const deleteClientById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Id is required' });
    }

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Record not found' });
    }
    
    await user.destroy();
    res.status(StatusCodes.OK).json({ message: 'Record deleted' });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Error when deleting record' });
  }
};