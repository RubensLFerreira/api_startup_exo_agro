import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import Usuario from '../../models/Usuario.js';
import Cliente from '../../models/Cliente.js';

import createUserToken from '../../utils/createUserToken.js';
import clienteSchema from '../../validations/clienteValidator.js';

const clienteController = {
  create: async (req, res) => {
    try {
      const {
        nome,
        telefone,
        email,
        senha,
        nascimento,
        rua,
        bairro,
        cidade,
        propriedade,
        cultivo,
        problema,
        notificacao,
      } = req.body;

      await clienteSchema.validate(req.body, { abortEarly: false });

      const salt = await bcrypt.genSalt(10);
      const senhaHash = await bcrypt.hash(senha, salt);

      const usuario = await Usuario.create({
        nome,
        telefone,
        email,
        senha: senhaHash,
        nascimento,
        rua,
        bairro,
        cidade,
        perfil_id: 1,
      });

      await Cliente.create({
        propriedade,
        cultivo,
        problema,
        notificacao,
        usuario_id: usuario.id,
      });

      await createUserToken(usuario, req, res);
    } catch (error) {
      console.error('Error fetching records!', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error fetching records!',
      });
    }
  },
};

export default clienteController;
