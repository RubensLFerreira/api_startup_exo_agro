import express from 'express';

import { StatusCodes } from 'http-status-codes';

import clienteGetAll from '../controllers/cliente/GetAll.js';

const router = express.Router();

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

router.get('/clientes', clienteGetAll.getAllClientes);

export default router;
