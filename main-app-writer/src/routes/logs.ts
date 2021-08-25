import express from 'express';
import uuidGen from '../uuidGenerator';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(uuidGen.createTimestampedUUID());
});

export default router;
