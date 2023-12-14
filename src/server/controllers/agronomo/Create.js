const { StatusCodes } = require('http-status-codes');

const createUserToken = require('../../utils/createUserToken.js');
const agronomoSchema = require('./../../validations/agronomoValidator.js');

const agronomoService = require('../../services/agronomo/Create.js');

const agronomoController = {
  create: async (req, res) => {
    try {
      const agronomoData = req.body;
      const foto = req.file;

      await agronomoSchema.validate(agronomoData);

      const usuario = await agronomoService(agronomoData, foto);

      createUserToken(usuario, req, res);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when creating a new record',
        validator: error.errors,
        service: error.message,
      });
    }
  },
};

module.exports = agronomoController;
