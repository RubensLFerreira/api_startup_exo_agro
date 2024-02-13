import { Router } from 'express';

import upload from '../utils/uploadImage';

import {
  createClient,
  getAllClients,
  getClientById,
  updateClientById,
  deleteClientById,
} from '../controllers/client';

const router = Router();

router.route('/:type?').post(upload.single('photo'), createClient);

router.route('/').get(getAllClients);

router.route('/:id')
  .get(getClientById)
  .delete(deleteClientById);

router.route('/:type?/:id').put(upload.single('photo'), updateClientById);

export default router;