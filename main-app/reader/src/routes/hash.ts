import express from 'express';
import logger from '../logger';
import fileReader from '../fileReader';

const router = express.Router();

router.get('/', async (_req, res) => {
  const timestamp = await fileReader.readTimestamp();
  const pingcount = await fileReader.readPings();

  return timestamp && pingcount
    ? res.send(logger.write(timestamp, pingcount))
    : res.send('unable to read file');
});

export default router;
