import express from 'express';
import hashGen from '../HashGenerator';
import fileReader from '../fileReader';

const router = express.Router();

// For whatever insane reason I couldn't get the router function to work
// asynchronously. 'await fileReader.readTimestamp()' was always undefined.
router.get('/', (_req, res) => {
  const timestamp = fileReader.readTimestamp();
  return timestamp
    ? res.send(hashGen.addHash(timestamp))
    : res.send('unable to read file');
});

export default router;
