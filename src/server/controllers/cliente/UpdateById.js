const { StatusCodes } = require('http-status-codes');

const clienteSchema = require('../../validations/clienteValidator.js');

const clienteService = require('../../services/cliente/UpdateById.js');

const clienteController = {
  updateById: async (req, res) => {
    try {
      const { id } = req.params;

      const clienteData = req.body;

      await clienteSchema.validate(clienteData);

      const { updatedCliente, updatedUsuario } = await clienteService(
        clienteData,
        id,
      );

      res.status(StatusCodes.OK).json({ updatedCliente, updatedUsuario });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error updating a record',
        validator: error.errors,
        service: error.message,
      });
    }
  },
};

module.exports = clienteController;
