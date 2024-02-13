import { Router } from 'express';

import upload from '../utils/uploadImage';

import {
  createVisit,
  getAllVisits,
  getAllDoneVisits,
  getAllCanceledVisits,
  updateVisitById,
  deleteVisitById,
  getVisitById
} from '../controllers/visit';

const router = Router();

router.route('/').get(getAllVisits);

router.route('/:type?')
  .post(upload.single('photo'), createVisit);

router.route('/:id/:type?').put(upload.single('photo'), updateVisitById);

router.route('/:id')
  .get(getVisitById)
  .delete(deleteVisitById); 

router.route('/pending').get(getAllVisits);
router.route('/done').get(getAllDoneVisits);
router.route('/canceled').get(getAllCanceledVisits);

export default router;
