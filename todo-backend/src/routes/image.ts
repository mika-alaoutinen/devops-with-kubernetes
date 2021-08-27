import express, { Response } from 'express';
import imageService from '../services/imageService';

const router = express.Router();

const sendImageAsHtml = (image: Buffer, res: Response): void => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body><img src="data:image/jpeg;base64,');
  res.write(Buffer.from(image).toString('base64'));
  res.end('"/></body></html>');
};

router.get('/', async (_req, res) => {
  const image = await imageService.fetchImage();
  console.log(image);
  sendImageAsHtml(image, res);
});

export default router;
