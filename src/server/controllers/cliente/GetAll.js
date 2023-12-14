const { StatusCodes } = require('http-status-codes');

const clienteService = require('../../services/cliente/GetAll.js');

const clienteController = {
  getAll: async (_, res) => {
    try {
      const clientes = await clienteService();

      return res.status(StatusCodes.OK).json({ clientes });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when searching all records',
        validator: error.errors,
        service: error.message,
      });
    }
  },
};

module.exports = clienteController;
