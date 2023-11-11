import express from 'express';

import { StatusCodes } from 'http-status-codes';

import getAllCustomers from '../controllers/cliente/GetAll.js';
import createCustomer from '../controllers/cliente/Create.js';
import updateCustomer from '../controllers/cliente/UpdateById.js';
import deleteCustomer from '../controllers/cliente/DeleteById.js';

const router = express.Router();

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

router.get('/clientes', getAllCustomers.getAll);
router.post('/cliente/cadastrar', createCustomer.create);
router.put('/cliente/editar/:id', updateCustomer.updateById);
router.delete('/cliente/deletar/:id', deleteCustomer.deleteById);

export default router;
