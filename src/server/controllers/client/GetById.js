import Cliente from '../../models/Cliente.js';

import { StatusCodes } from 'http-status-codes';

const clienteController = {
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const cliente = await Cliente.findOne({ where: { id: id } });

      res.status(StatusCodes.OK).json({ cliente });
    } catch (error) {
      console.error('Erro when searching for customer!', error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Erro when searching for customer!',
      });
    }
  },
};

export default clienteController;
