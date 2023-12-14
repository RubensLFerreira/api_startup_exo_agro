const Usuario = require('../../models/Usuario.js');
const Admin = require('./../../models/Admin.js');

const bcrypt = require('bcrypt');

const profileAdmin = 1;

const createAdminService = async (adminData, foto) => {
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
    } = adminData;

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
      perfil_id: profileAdmin,
    });

    await Admin.create({
      usuario_id: usuario.id,
      senha: senhaHash,
    });

    return usuario;
  } catch (error) {
    throw new Error('Error when creating a new record');
  }
};

module.exports = createAdminService;
