import 'dotenv/config';

import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

const createUserToken = async (usuario, _, res) => {
  const secret = process.env.SECRET;

  const token = jwt.sign(
    {
      nome: usuario.nome,
      id: usuario.id,
    },
    secret,
  );

  res.status(StatusCodes.CREATED).json({
    message: 'Authenticated user!',
    token: token,
    usuarioId: usuario.id,
  });
};

export default createUserToken;
