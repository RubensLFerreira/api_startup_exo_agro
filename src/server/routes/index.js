import express from 'express';

import { StatusCodes } from 'http-status-codes';

import imageUpload from './../middlewares/uploadImage.js';
import authenticated from './../middlewares/authenticated.js';

import createAdmin from '../controllers/admin/Create.js';

import getAllCustomers from '../controllers/client/GetAll.js';
import getCustomerById from '../controllers/client/GetById.js';
import createCustomer from '../controllers/client/Create.js';
import updateCustomer from '../controllers/client/UpdateById.js';
import deleteCustomer from '../controllers/client/DeleteById.js';

import getAllAgronomist from '../controllers/agronomo/GetAll.js';
import createAgronomist from '../controllers/agronomo/Create.js';

const router = express.Router();

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

router.post(
  '/admin/cadastrar/:tipo',
  imageUpload.single('foto'),
  createAdmin.create,
);

router.get('/clientes', authenticated, getAllCustomers.getAll);
router.get('/cliente/:id', getCustomerById.getById);
router.post(
  '/cliente/cadastrar/:tipo',
  imageUpload.single('foto'),
  createCustomer.create,
);
router.put('/cliente/editar/:id', updateCustomer.updateById);
router.delete('/cliente/deletar/:id', deleteCustomer.deleteById);

router.post(
  '/agronomo/cadastrar/:tipo',
  imageUpload.single('foto'),
  createAgronomist.create,
);
router.get('/agronomos', getAllAgronomist.getAll);

export default router;
