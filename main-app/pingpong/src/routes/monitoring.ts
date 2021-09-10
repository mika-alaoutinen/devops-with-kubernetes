import express, { Response } from 'express';
import { checkConnection } from '../db/pool';
import { HealthCheck } from '../types';

const router = express.Router();

router.get('/health', async (_req, res: Response<HealthCheck>) => {
  if (await checkConnection()) {
    res.send({ status: 'UP' });
  } else {
    res.send({ status: 'DOWN' });
  }
});

export default router;
