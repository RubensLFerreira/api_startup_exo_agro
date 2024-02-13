import { Router } from 'express';

import upload from '../utils/uploadImage';
import validateToken from '../middlewares/validateToken';

import { createAdmin, getAllAdmin } from '../controllers/admin';

const router = Router();

router.route('/:type').post(upload.single('photo'), createAdmin);

router.route('/').get(validateToken, getAllAdmin);

export default router;