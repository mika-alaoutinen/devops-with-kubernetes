import axios from 'axios';
import express, { Response } from 'express';

interface HealthCheck {
  status: 'UP' | 'DOWN'
}

const router = express.Router();
const url = process.env.PINGPONG_READINESS_CHECK || 'http://pingpong-svc/monitoring/readiness';

router.get('/readiness', async (_req, res: Response<HealthCheck>) => {
  try {
    const { data } = await axios.get<HealthCheck>(url);
    if (data.status === 'UP') {
      res.send(data);
    } else {
      res.status(500).send({ status: 'DOWN' });
    }
  } catch (error) {
    res.status(500).send({ status: 'DOWN' });
  }
});

export default router;
