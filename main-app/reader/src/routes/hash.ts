import express from 'express';
import hashGen from '../HashGenerator';
import fileReader from '../fileReader';

const router = express.Router();

router.get('/', async (_req, res) => {
  const timestamp = await fileReader.readTimestamp();
  return timestamp
    ? res.send(hashGen.addHash(timestamp))
    : res.send('unable to read file');
});

export default router;
