import { StatusCodes } from 'http-status-codes';
import Visita from './../../models/Visita.js';

const visitaController = {
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const visita = await Visita.findOne({ where: { id: id } });

      if (visita === null) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: 'Invalid not found!',
        });
      }

      res.status(StatusCodes.OK).json({ visita });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when search visit for ID',
        error: error,
      });
    }
  },
};

export default visitaController;
