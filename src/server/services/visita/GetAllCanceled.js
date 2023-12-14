const Visita = require('../../models/Visita.js');

const visitaService = async (id) => {
  try {
    const visita = await Visita.findOne({ where: { status_id: id } });

    if (!visita) {
      throw new Error('register not found');
    }

    return visita;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = visitaService;
