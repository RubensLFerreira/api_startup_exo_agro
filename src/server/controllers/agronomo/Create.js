import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import Usuario from '../../models/Usuario.js';
import Agronomo from '../../models/Agronomo.js';

import createUserToken from '../../utils/createUserToken.js';
import agronomoSchema from './../../validations/agronomoValidator.js';

const profileAgronomo = 2;

const agronomoController = {
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
        formacao,
        especializacao,
      } = req.body;

      await agronomoSchema.validate(req.body);

      const salt = await bcrypt.genSalt(10);
      const senhaHash = await bcrypt.hash(senha, salt);

      const usuario = await Usuario.create({
        foto: foto.filenames,
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
        perfil_id: profileAgronomo,
      });

      await Agronomo.create({
        formacao,
        especializacao,
        usuario_id: usuario.id,
      });

      createUserToken(usuario, req, res);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error creating agronomist!',
        validator: error.errors,
      });
    }
  },
};

export default agronomoController;
