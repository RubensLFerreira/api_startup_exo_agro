const { StatusCodes } = require('http-status-codes');

const agronomoService = require('../../services/agronomo/GetAll.js');

const agronomoController = {
  getAll: async (_, res) => {
    try {
      const agronomos = await agronomoService();

      res.status(StatusCodes.OK).json(agronomos);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when searching all records',
        service: error.message,
      });
    }
  },
};

module.exports = agronomoController;
