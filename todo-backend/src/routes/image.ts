import express from 'express';
import imageService from '../services/imageService';

const router = express.Router();

router.get('/', async (_req, res) => {
  const image = await imageService.fetchImage();
  res.send(image);
});

export default router;
