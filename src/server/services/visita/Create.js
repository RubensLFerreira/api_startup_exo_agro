const Visita = require('../../models/Visita.js');
const Cliente = require('../../models/Cliente.js');
const Agronomo = require('../../models/Agronomo.js');
const Status = require('../../models/Status.js');

const visitaSchema = require('./../../validations/visitaValidator.js');

const visitaService = async (visitaData) => {
  try {
    const {
      objetivo,
      diagnostico,
      praga,
      produto,
      observacoes,
      plantio,
      cliente,
      agronomo,
      status,
      venda,
      data,
      chegada,
      saida,
      fotos,
    } = visitaData;

    await visitaSchema.validate(visitaData);

    const isCliente = await Cliente.findOne({ where: { id: cliente } });
    const isAgronomo = await Agronomo.findOne({ where: { id: agronomo } });
    const isStatus = await Status.findOne({ where: { id: status } });

    if (!isCliente || !isAgronomo || !isStatus) {
      throw new Error('ForeignKey not found!');
    }

    const visita = await Visita.create({
      objetivo,
      diagnostico,
      praga,
      produto,
      observacoes,
      plantio,
      foto: fotos,
      cliente_id: isCliente.id,
      agronomo_id: isAgronomo.id,
      status_id: isStatus.id,
      venda,
      data,
      chegada,
      saida,
    });

    return visita;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = visitaService;
