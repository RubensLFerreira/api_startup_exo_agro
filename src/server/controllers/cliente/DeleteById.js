const { StatusCodes } = require('http-status-codes');

const clienteService = require('../../services/cliente/DeleteById.js');

const clienteController = {
  deleteById: async (req, res) => {
    try {
      const { id } = req.params;

      await clienteService(id);

      res.status(StatusCodes.OK).json({});
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when deleting a record',
        service: error.message,
      });
    }
  },
};

module.exports = clienteController;
