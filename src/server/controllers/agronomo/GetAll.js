import { StatusCodes } from 'http-status-codes';

import Agronomo from '../../models/Agronomo.js';
import Usuario from '../../models/Usuario.js';

const agronomoController = {
  getAll: async (_, res) => {
    try {
      const agronomos = await Agronomo.findAll({
        include: {
          model: Usuario,
          as: 'usuario',
        },
      });

      res.status(StatusCodes.OK).json({ agronomos });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when searching for records!',
        validator: error.errors,
      });
    }
  },
};

export default agronomoController;
