import Visita from './../../models/Visita.js';
import { StatusCodes } from 'http-status-codes';

const visitaController = {
  getAllCanceled: async (_, res) => {
    try {
      const visitas = await Visita.findAll({ where: { status_id: 3 } });

      res.status(StatusCodes.OK).json({ visitas });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          message: 'Error when searching for scheduled visits!',
          error: error,
        });
    }
  },
};

export default visitaController;