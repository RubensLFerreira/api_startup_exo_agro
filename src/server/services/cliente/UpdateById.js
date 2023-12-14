const Cliente = require('../../models/Cliente.js');
const Usuario = require('../../models/Usuario.js');

const clienteService = async (clienteData, id) => {
  try {
    const {
      propriedade,
      cultivo,
      problema,
      notificacao,
      usuarioId,
      nome,
      telefone,
      email,
      nascimento,
      rua,
      bairro,
      cidade,
    } = clienteData;

    const updatedCliente = await Cliente.update(
      {
        propriedade,
        cultivo,
        problema,
        notificacao,
        usuario_id: usuarioId,
      },
      { where: { id: id } },
    );

    const updatedUsuario = await Usuario.update(
      {
        nome,
        telefone,
        email,
        nascimento,
        rua,
        bairro,
        cidade,
        perfil_id: 3,
      },
      { where: { id: usuarioId } },
    );

    return { updatedCliente, updatedUsuario };
  } catch (error) {
    throw new Error('Error updating a record');
  }
};

module.exports = clienteService;
