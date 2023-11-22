import { StatusCodes } from 'http-status-codes';
import Visita from './../../models/Visita.js';

const visitaController = {
  getAllProgress: async (_, res) => {
    try {
      const visitas = await Visita.findAll({ where: { status_id: 1 } });

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
