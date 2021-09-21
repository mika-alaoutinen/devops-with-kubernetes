import express, { Response } from 'express';
import filewriter from '../filewriter';
import pingService from '../services/pingService';

const router = express.Router();

router.get('/', async (_req, res: Response<string>) => {
  const count = await pingService.savePing();
  filewriter.write(count.toString());
  res.send(count.toString());
});

export default router;
