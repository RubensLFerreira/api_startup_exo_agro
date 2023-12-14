const { StatusCodes } = require('http-status-codes');

const usuarioService = require('../../services/usuario/Search.js');

const usuarioController = {
  search: async (req, res) => {
    const { nomeProcurado, perfilUsuario } = req.params;

    try {
      if (!nomeProcurado && !perfilUsuario) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: 'Invalid parameters',
        });
      }

      const usuarios = await usuarioService(nomeProcurado, perfilUsuario);

      res.status(StatusCodes.OK).json({ usuarios });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when searching for registers!',
        service: error.message,
      });
    }
  },
};

module.exports = usuarioController;
