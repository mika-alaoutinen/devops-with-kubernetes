import express from 'express';
import imageService from '../services/imageService';

const router = express.Router();

// Returns the image blob.
router.get('/', async (_req, res) => {
  const image = await imageService.fetchImage();
  res.send(image);
});

// Returns the image wrapped in a HTML document.
router.get('/html', async (_req, res) => {
  const image = await imageService.fetchImage();
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body><img src="data:image/jpeg;base64,');
  res.write(Buffer.from(image).toString('base64'));
  res.end('"/></body></html>');
});

export default router;
