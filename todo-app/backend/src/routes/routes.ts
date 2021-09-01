import express from 'express';
import imageRoute from './image';
import infoRouter from './info';
import todoRouter from './todos';

const router = express.Router();
router.get('/', infoRouter);
router.use('/image', imageRoute);
router.use('/todos', todoRouter);
router.use('/whoami', infoRouter);

export default router;
