import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Visit from '../../Models/Visit';

export const deleteVisitById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const visit = await Visit.findByPk(id);

    if (!visit) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Visit not found',
      });
    }

    await visit.destroy();

    res.status(StatusCodes.OK).json({
      message: 'Visit deleted successfully',
    });
  } catch (error: any) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Error when deleting the record',
    });
  }
}; 