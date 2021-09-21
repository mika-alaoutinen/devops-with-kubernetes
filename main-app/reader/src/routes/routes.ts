import express from 'express';
import hashRoute from './hash';
import monitoringRouter from './monitoring';
import rootRouter from './root';

const router = express.Router();
router.use('/', rootRouter);
router.use('/hash', hashRoute);
router.use('/monitoring', monitoringRouter);

export default router;
