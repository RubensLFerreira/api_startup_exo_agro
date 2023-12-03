import { Op } from 'sequelize';
import { StatusCodes } from 'http-status-codes';

import Usuario from '../../models/Usuario.js';

const usuarioController = {
  searchUsuario: async (req, res) => {
    const { nomeUsuario, perfilId } = req.params;

    if (!nomeUsuario && !perfilId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Please provide search parameters!',
      });
    }

    const clausulaWhere = {};

    if (nomeUsuario) {
      clausulaWhere.nome = { [Op.like]: `%${nomeUsuario}%` };
    }

    if (perfilId) {
      clausulaWhere.perfil_id = perfilId;
    }

    try {
      const usuariosEncontrados = await Usuario.findAll({
        where: clausulaWhere,
      });

      if (!usuariosEncontrados || usuariosEncontrados.length === 0) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: 'No users found!',
        });
      }

      res.status(StatusCodes.OK).json({ usuariosEncontrados });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when searching for clients!',
        error: error.message,
      });
    }
  },
};

export default usuarioController;
