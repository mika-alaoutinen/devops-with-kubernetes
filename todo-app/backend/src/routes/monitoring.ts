import express, { Response } from 'express';
import { checkConnection } from '../db/pool';

interface HealthCheck {
  status: 'UP' | 'DOWN'
}

const router = express.Router();

router.get('/readiness', async (_req, res: Response<HealthCheck>) => {
  if (await checkConnection()) {
    res.send({ status: 'UP' });
  } else {
    res.status(500).send({ status: 'DOWN' });
  }
});

export default router;
