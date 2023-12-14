const { StatusCodes } = require('http-status-codes');
const visitaService = require('../../services/visita/Create.js');

const visitaController = {
  create: async (req, res) => {
    try {
      const fotos = req.files.map((file) => file.filename);
      const visitaData = req.body;

      const visita = await visitaService({ ...visitaData, fotos });

      res.status(StatusCodes.CREATED).json({ visita });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when creating a new record',
        validator: error.message,
        service: error.message
      });
    }
  },
};

module.exports = visitaController;
