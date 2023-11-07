import Cliente from '../../models/Cliente.js';

import { StatusCodes } from 'http-status-codes';

const clienteController = {};

clienteController.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();

    return res.status(StatusCodes.OK).json({ clientes });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error, message: 'Error fetching records!' });
  }
};

export default clienteController;
