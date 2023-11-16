import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import Usuario from '../../models/Usuario.js';
import Admin from './../../models/Admin.js';

import createUserToken from '../../utils/createUserToken.js';
import adminSchema from './../../validations/adminValidator.js';

const profileAdmin = 1;

const adminController = {
  create: async (req, res) => {
    try {
      const foto = req.file;
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
      } = req.body;

      await adminSchema.validate(req.body);

      const salt = await bcrypt.genSalt(10);
      const senhaHash = await bcrypt.hash(senha, salt);

      const usuario = await Usuario.create({
        foto: foto.filename,
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
        perfil_id: profileAdmin,
      });

      await Admin.create({
        usuario_id: usuario.id,
      });

      createUserToken(usuario, req, res);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error creating administrator!',
        validator: error.errors,
      });
    }
  },
};

export default adminController;
