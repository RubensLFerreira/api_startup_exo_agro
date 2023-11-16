import { StatusCodes } from 'http-status-codes';

import Cliente from '../../models/Cliente.js';

const clienteController = {
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const cliente = await Cliente.findOne({ where: { id: id } });

      res.status(StatusCodes.OK).json({ cliente });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Erro when searching for customer!',
        validator: error.errors,
      });
    }
  },
};

export default clienteController;
