import express from 'express';
import monitoringRouter from './monitoring';
import pongRouter from './pong';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Hello ping pong!');
});

router.use('/monitoring', monitoringRouter);
router.use('/pingpong', pongRouter);

export default router;
