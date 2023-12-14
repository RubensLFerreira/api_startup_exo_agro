const Usuario = require('../../models/Usuario.js');
const Agronomo = require('../../models/Agronomo.js');

const bcrypt = require('bcrypt');

const profileAgronomo = 2;

const agronomoService = async (agronomoData, foto) => {
  try {
    const {
      nome,
      telefone,
      sexo,
      cpf,
      email,
      senha,
      nascimento,
      rua,
      bairro,
      cidade,
      formacao,
      especializacao,
    } = agronomoData;

    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

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
      perfil_id: profileAgronomo,
    });

    await Agronomo.create({
      formacao,
      especializacao,
      usuario_id: usuario.id,
      senha: senhaHash,
    });

    return usuario;
  } catch (error) {
    throw new Error('Error when creating a new record');
  }
};

module.exports = agronomoService;
