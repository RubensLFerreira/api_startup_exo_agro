const { StatusCodes } = require('http-status-codes');

const visitaService = require('../../services/visita/GetById.js');

const visitaController = {
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const visita = await visitaService(id);

      res.status(StatusCodes.OK).json({ visita });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when searching for a record',
        service: error.message,
      });
    }
  },
};

module.exports = visitaController;
