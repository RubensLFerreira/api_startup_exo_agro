import { StatusCodes } from 'http-status-codes';

import Cliente from '../../models/Cliente.js';
import Usuario from '../../models/Usuario.js';

import clienteSchema from '../../validations/clienteValidator.js';

const clienteController = {
  updateById: async (req, res) => {
    try {
      const { id } = req.params;

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
        usuarioId,
      } = req.body;

      await clienteSchema.validate(req.body, { abortEarly: false });

      const cliente = await Cliente.update(
        {
          propriedade,
          cultivo,
          problema,
          notificacao,
          usuario_id: usuarioId,
        },
        { where: { id: id } },
      );

      const usuario = await Usuario.update(
        {
          nome,
          telefone,
          email,
          senha,
          nascimento,
          rua,
          bairro,
          cidade,
        },
        { where: { id: usuarioId } },
      );

      res.status(StatusCodes.OK).json({ cliente, usuario });
    } catch (error) {
      console.error('Error updating client!', error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error updating client!' });
    }
  },
};

export default clienteController;
