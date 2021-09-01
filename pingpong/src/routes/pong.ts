import express from 'express';
import filewriter from '../filewriter';

const router = express.Router();
let counter = 0;

router.get('/', (_req, res) => {
  counter += 1;
  filewriter.write(counter.toString());
  res.send(counter.toString());
});

export default router;
