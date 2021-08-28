import express from 'express';
import imageRoute from './image';
import infoRouter from './info';

const router = express.Router();
router.get('/', infoRouter);
router.use('/image', imageRoute);
router.use('/whoami', infoRouter);

export default router;
