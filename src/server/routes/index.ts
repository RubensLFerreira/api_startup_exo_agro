import { Router, Request, Response } from 'express';

import authenticated from '../middlewares/authenticated';

import adminRoutes from './adminRoutes';
import agronomistRoutes from './agronomistRoutes';
import clientRoutes from './clientRoutes';
import visitRoutes from './visitRoutes';
import userRoutes from './userRoutes';

const router = Router();

router.use('/login', authenticated);
router.use('/admin', adminRoutes);
router.use('/agronomist', agronomistRoutes);
router.use('/client', clientRoutes);
router.use('/visit', visitRoutes);
router.use('/user', userRoutes);
router.use('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World!' });
});

export default router;