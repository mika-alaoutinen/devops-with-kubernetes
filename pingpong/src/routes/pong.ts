import express from 'express';

const router = express.Router();
let counter = 0;

router.get('/', (_req, res) => {
  counter += 1;
  res.send(`pong ${counter}`);
});

export default router;
