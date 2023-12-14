require('dotenv/config');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const createUserToken = async (usuario, _, res) => {
  const secret = process.env.JWT_SECRET;

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

module.exports = createUserToken;
