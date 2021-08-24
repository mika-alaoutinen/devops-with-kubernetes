import express from 'express';
import pongRouter from './routes/pong';

const app = express();
const port = 9080;

// Routes
app.get('/', (_req, res) => {
  res.send('Hello ping pong!');
});

app.use('/pingpong', pongRouter);

// start the Express server
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
