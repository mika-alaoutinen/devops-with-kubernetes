import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('This is Main App Reader');
});

export default router;
