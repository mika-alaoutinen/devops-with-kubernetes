import axios from 'axios';
import express from 'express';
import logger from '../logger';
import fileReader from '../fileReader';

const router = express.Router();

const url = process.env.PINGPONG_URL || 'http://pingpong-svc/pingpong';

router.get('/', async (_req, res) => {
  const timestamp = await fileReader.readTimestamp();
  // const pingcount = await fileReader.readPings();
  let pingcount = 0;

  try {
    const pingResponse = await axios.get<number>(url);
    pingcount = pingResponse.data;
  } catch (error) {
    console.log('error calling ping service', error);
  }

  return timestamp
    ? res.send(logger.write(timestamp, pingcount.toString()))
    : res.status(500).send('unable to read file');
});

export default router;
