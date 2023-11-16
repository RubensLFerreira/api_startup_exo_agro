import { StatusCodes } from 'http-status-codes';

import Cliente from '../../models/Cliente.js';
import Usuario from '../../models/Usuario.js';

// Falta criar prop Foto e func p/ add foto
// Falta add validador de CPF válido

const clienteController = {
  getAll: async (_, res) => {
    try {
      const clientes = await Cliente.findAll({
        include: {
          model: Usuario,
          as: 'usuario',
        },
      });

      return res.status(StatusCodes.OK).json({ clientes });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error fetching records!',
        validator: error.errors,
      });
    }
  },
};

export default clienteController;
