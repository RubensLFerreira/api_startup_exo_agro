const Cliente = require('../../models/Cliente.js');
const Usuario = require('../../models/Usuario.js');

const clienteService = async () => {
  try {
    const clientes = await Cliente.findAll({
      include: {
        model: Usuario,
        as: 'usuario',
      },
    });

    return clientes;
  } catch (error) {
    throw new Error('Error when searching all records');
  }
};

module.exports = clienteService;
