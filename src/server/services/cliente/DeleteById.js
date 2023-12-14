const Cliente = require('../../models/Cliente.js');
const Usuario = require('../../models/Usuario.js');

const clienteService = async (id) => {
  try {
    await Cliente.destroy({ where: { id: id } });
    await Usuario.destroy({ where: { id: id } });
  } catch (error) {
    throw new Error('Error when deleting a record');
  }
};

module.exports = clienteService;
