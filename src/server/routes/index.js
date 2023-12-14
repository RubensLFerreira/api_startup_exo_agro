const express = require('express');
const { StatusCodes } = require('http-status-codes');

const imageUpload = require('./../middlewares/uploadImage.js');
// const authenticated = require('./../middlewares/authenticated.js');

const searchUser = require('../controllers/usuario/Search.js');

const createAdmin = require('../controllers/admin/Create.js');

const getAllCustomers = require('../controllers/cliente/GetAll.js');
const getCustomerById = require('../controllers/cliente/GetById.js');
const createCustomer = require('../controllers/cliente/Create.js');
const updateCustomer = require('../controllers/cliente/UpdateById.js');
const deleteCustomer = require('../controllers/cliente/DeleteById.js');

const getAllAgronomist = require('../controllers/agronomo/GetAll.js');
const createAgronomist = require('../controllers/agronomo/Create.js');

const createVisit = require('../controllers/visita/Create.js');
const getByIdVisit = require('../controllers/visita/GetById.js');
const updateByIdVisit = require('../controllers/visita/UpdateById.js');
const getAllProgressVisit = require('../controllers/visita/GetAllProgress.js');
const getAllFinishedVisit = require('../controllers/visita/GetAllFinished.js');
const getAllCanceledVisit = require('../controllers/visita/GetAllCanceled.js');

const router = express.Router();

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Hello world! Página inicial');
});

router.get('/usuario/:nomeProcurado/perfil/:perfilUsuario', searchUser.search);

router.post(
  '/admin/cadastrar/tipo/:tipo',
  imageUpload.single('foto'),
  createAdmin.create,
);

router.get('/clientes', getAllCustomers.getAll);
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

module.exports = router;
