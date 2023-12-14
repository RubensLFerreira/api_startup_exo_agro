const Usuario = require('../../models/Usuario.js');
const Cliente = require('../../models/Cliente.js');

const profileCliente = 3;

const clienteService = async (clienteData, foto) => {
  try {
    const {
      nome,
      telefone,
      sexo,
      cpf,
      email,
      nascimento,
      rua,
      bairro,
      cidade,
      propriedade,
      cultivo,
      problema,
      notificacao,
    } = clienteData;

    const usuario = await Usuario.create({
      foto: foto.filename,
      nome,
      telefone,
      sexo,
      cpf,
      email,
      nascimento,
      rua,
      bairro,
      cidade,
      perfil_id: profileCliente,
    });

    const cliente = await Cliente.create({
      propriedade,
      cultivo,
      problema,
      notificacao,
      usuario_id: usuario.id,
    });

    return cliente;
  } catch (error) {
    throw new Error('Error when creating a new record');
  }
};

module.exports = clienteService;
