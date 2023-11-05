import express from 'express';

import 'dotenv/config';

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Sucesso!' });
});

export { server };
