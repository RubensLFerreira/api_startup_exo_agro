import Cliente from '../../models/Cliente.js';

import { StatusCodes } from 'http-status-codes';

// Falta CPF e Sexo do cliente ao banco
// Falta criar prop Foto e func p/ add foto
// Falta add types extras as prop da base de dados
// Falta add validador de CPF válido

const clienteController = {
  getAll: async (_, res) => {
    try {
      const clientes = await Cliente.findAll();

      return res.status(StatusCodes.OK).json({ clientes });
    } catch (error) {
      console.error('Error fetching records!', error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error fetching records!' });
    }
  },
};

export default clienteController;
