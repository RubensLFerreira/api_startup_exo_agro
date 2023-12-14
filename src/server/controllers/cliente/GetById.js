const { StatusCodes } = require('http-status-codes');

const clienteService = require('../../services/cliente/GetById.js');

const clienteController = {
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const cliente = await clienteService(id);

      res.status(StatusCodes.OK).json({ cliente });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when searching for a record',
        service: error.message,
      });
    }
  },
};

module.exports = clienteController;
