const Agronomo = require('../../models/Agronomo.js');
const Usuario = require('../../models/Usuario.js');

const agronomoService = async () => {
  try {
    const agronomos = await Agronomo.findAll({
      include: {
        model: Usuario,
        as: 'usuario',
      },
    });

    return agronomos;
  } catch (error) {
    throw new Error('Error when searching all records');
  }
};

module.exports = agronomoService;
