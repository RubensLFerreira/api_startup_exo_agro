const Visita = require('../../models/Visita.js');

const visitaService = async (visitaData, id) => {
  try {
    const {
      chegada,
      saida,
      data,
      objetivo,
      diagnostico,
      praga,
      produto,
      observacoes,
      plantio,
      venda,
      cliente,
      agronomo,
      status,
    } = visitaData;

    const visita = await Visita.findOne({ where: { id: id } });

    if (!visita) {
      throw new Error('Register not found');
    }

    const visitaUpdate = await visita.update({
      chegada,
      saida,
      data,
      objetivo,
      diagnostico,
      praga,
      produto,
      observacoes,
      plantio,
      venda,
      cliente_id: cliente,
      agronomo_id: agronomo,
      status_id: status,
    });

    return visitaUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = visitaService;
