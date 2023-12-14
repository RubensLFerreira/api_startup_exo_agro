const { StatusCodes } = require('http-status-codes');

const visitaService = require('../../services/visita/GetAllFinished.js');

const visitaController = {
  getAllFinished: async (_, res) => {
    try {
      const id = 2;
      const visitas = await visitaService(id);

      res.status(StatusCodes.OK).json({ visitas });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when searching all records',
        service: error.message,
      });
    }
  },
};

module.exports = visitaController;

// (1, 'andamento'),
// (2, 'finalizado'),
// (3, 'cancelado');
