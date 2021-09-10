import express from 'express';
import filewriter from '../filewriter';
import pingService from '../services/pingService';

const router = express.Router();

router.get('/', async (_req, res) => {
  const count = await pingService.savePing();
  filewriter.write(count.toString());
  res.send(count.toString());
});

export default router;
