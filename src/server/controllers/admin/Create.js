import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import Usuario from '../../models/Usuario.js';
import Admin from './../../models/Admin.js';

import createUserToken from '../../utils/createUserToken.js';

const adminController = {
  create: async (req, res) => {
    try {
      const {
        foto,
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
      } = req.body;

      const salt = await bcrypt.genSalt(10);
      const senhaHash = await bcrypt.hash(senha, salt);

      const usuario = await Usuario.create({
        foto,
        nome,
        telefone,
        sexo,
        cpf,
        email,
        senha: senhaHash,
        nascimento,
        rua,
        bairro,
        cidade,
        perfil_id: 1,
      });

      await Admin.create({
        usuario_id: usuario.id,
      });

      createUserToken(usuario, req, res);
    } catch (error) {
      console.error('Error creating administrator!', error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error creating administrator!',
      });
    }
  },
};

export default adminController;
