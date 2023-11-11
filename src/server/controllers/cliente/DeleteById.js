import { StatusCodes } from 'http-status-codes';

import Cliente from '../../models/Cliente.js';
import Usuario from '../../models/Usuario.js';

const clienteController = {
  deleteById: async (req, res) => {
    try {
      const { id } = req.params;

      await Cliente.destroy({ where: { id: id } });
      await Usuario.destroy({ where: { id: id } });

      res.status(StatusCodes.OK).json({});
    } catch (error) {
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Cliente delete successfully!',
      });
    }
  },
};

export default clienteController;
