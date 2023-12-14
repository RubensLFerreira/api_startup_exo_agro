const Cliente = require('../../models/Cliente.js');
const Usuario = require('../../models/Usuario.js');

const clienteService = async (idCliente) => {
  try {
    const id = idCliente;

    const cliente = await Cliente.findOne({
      where: { id: id },
      include: {
        model: Usuario,
        as: 'usuario',
      }
    });

    return cliente;
  } catch (error) {
    throw new Error('Error when searching for a record');
  }
};

module.exports = clienteService;
