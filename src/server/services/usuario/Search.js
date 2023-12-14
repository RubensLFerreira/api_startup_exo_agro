const Usuario = require('../../models/Usuario.js');
const { Op } = require('sequelize');

const usuarioService = async (nomeProcurado, perfilUsuario) => {
  let clausulaWhere = {};

  if (nomeProcurado) {
    clausulaWhere.nome = {
      [Op.like]: `%${nomeProcurado}%`,
    };
  }

  if (perfilUsuario) {
    clausulaWhere.perfil_id = perfilUsuario;
  }

  try {
    const usuarios = await Usuario.findAll({
      where: clausulaWhere,
    });

    if (!usuarios || usuarios.length === 0) {
      throw new Error('User not found!');
    }

    return usuarios;
  } catch (error) {
    throw Error(error.message) ;
  }
};

module.exports = usuarioService;
