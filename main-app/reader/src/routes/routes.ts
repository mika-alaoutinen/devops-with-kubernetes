import express from 'express';
import hashRoute from './hash';
import rootRouter from './root';

const router = express.Router();
router.use('/', rootRouter);
router.use('/hash', hashRoute);

export default router;
