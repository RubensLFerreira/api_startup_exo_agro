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

import createVisit from '../controllers/visita/Create.js';
import getByIdVisit from '../controllers/visita/GetById.js';
import updateByIdVisit from '../controllers/visita/UpdateById.js';
import getAllProgressVisit from '../controllers/visita/GetAllProgress.js';
import getAllFinishedVisit from '../controllers/visita/GetAllFinished.js';
import getAllCanceledVisit from '../controllers/visita/GetAllCanceled.js';

const router = express.Router();

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

router.post(
  '/admin/cadastrar/tipo/:tipo',
  imageUpload.single('foto'),
  createAdmin.create,
);

router.get('/clientes', authenticated, getAllCustomers.getAll);
router.get('/cliente/:id', getCustomerById.getById);
router.post(
  '/cliente/cadastrar/tipo/:tipo',
  imageUpload.single('foto'),
  createCustomer.create,
);
router.put('/cliente/editar/:id', updateCustomer.updateById);
router.delete('/cliente/deletar/:id', deleteCustomer.deleteById);

router.post(
  '/agronomo/cadastrar/tipo/:tipo',
  imageUpload.single('foto'),
  createAgronomist.create,
);
router.get('/agronomos', getAllAgronomist.getAll);

router.post(
  '/visita/agendar/tipo/:tipo',
  imageUpload.array('foto'),
  createVisit.create,
);
router.put('/visita/editar/:id', updateByIdVisit.update);
router.get('/visita/agendada', getAllProgressVisit.getAllProgress);
router.get('/visita/finalizada', getAllFinishedVisit.getAllFinished);
router.get('/visita/cancelada', getAllCanceledVisit.getAllCanceled);
router.get('/visita/:id', getByIdVisit.getById);

export default router;
