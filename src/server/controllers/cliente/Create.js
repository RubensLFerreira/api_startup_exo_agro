const { StatusCodes } = require('http-status-codes');

const clienteSchema = require('../../validations/clienteValidator.js');

const clienteService = require('../../services/cliente/Create.js');

const clienteController = {
  create: async (req, res) => {
    try {
      const clienteData = req.body;
      const foto = req.file;

      await clienteSchema.validate(clienteData);

      const cliente = await clienteService(clienteData, foto);

      res.status(StatusCodes.CREATED).json({ cliente });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when creating a new record',
        validator: error.errors,
        service: error.message,
      });
    }
  },
};

module.exports = clienteController;
