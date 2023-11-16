import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import Usuario from '../../models/Usuario.js';
import Cliente from '../../models/Cliente.js';

import clienteSchema from '../../validations/clienteValidator.js';

const profileCliente = 3;

const clienteController = {
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
        propriedade,
        cultivo,
        problema,
        notificacao,
      } = req.body;

      await clienteSchema.validate(req.body, { abortEarly: false });

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
        perfil_id: profileCliente,
      });

      const cliente = await Cliente.create({
        propriedade,
        cultivo,
        problema,
        notificacao,
        usuario_id: usuario.id,
      });

      res.status(StatusCodes.CREATED).json({ cliente });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error fetching records!',
        validator: error.errors,
      });
    }
  },
};

export default clienteController;
