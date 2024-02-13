import { Router } from 'express';

import upload from '../utils/uploadImage';

import { createAgronomist, getAllAgronomist } from '../controllers/agronomist';

const router = Router();

router.route('/:type').post(upload.single('photo'), createAgronomist);

router.route('/').get(getAllAgronomist);

export default router;