const { StatusCodes } = require('http-status-codes');

// const visitaSchema = require('../../validations/visitaValidator.js');

const visitaService = require('../../services/visita/UpdateById.js');

const visitaController = {
  update: async (req, res) => {
    const { id } = req.params;
    const visitaData = req.body;

    try {
      // await visitaSchema.validate(req.body);

      const visita = await visitaService(visitaData, id);

      res.status(StatusCodes.OK).json({ visita });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Error updating a record',
        service: error.message,
      });
    }
  },
};

module.exports = visitaController;
