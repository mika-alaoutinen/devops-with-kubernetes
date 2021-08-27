import express from 'express';
import imageRoute from './routes/image';

const app = express();
const port = 8080;

// Routes
app.get('/', (_req, res) => {
  res.send('Hello from Todo backend!');
});

app.use('/image', imageRoute);

// start the Express server
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
