const { StatusCodes } = require('http-status-codes');

const visitaService = require('../../services/visita/GetAllCanceled.js');

const visitaController = {
  getAllCanceled: async (_, res) => {
    try {
      const id = 3;
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
