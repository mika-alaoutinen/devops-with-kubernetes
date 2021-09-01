import axios from 'axios';
import express from 'express';
import logger from '../logger';
import fileReader from '../fileReader';

const router = express.Router();

router.get('/', async (_req, res) => {
  const timestamp = await fileReader.readTimestamp();
  // const pingcount = await fileReader.readPings();
  let pingcount = 0;

  try {
    const pingResponse = await axios.get<number>('http://pingpong-svc/pingpong');
    pingcount = pingResponse.data;
  } catch (error) {
    console.log('error calling ping service', error);
  }

  return timestamp
    ? res.send(logger.write(timestamp, pingcount.toString()))
    : res.send('unable to read file');
});

export default router;
