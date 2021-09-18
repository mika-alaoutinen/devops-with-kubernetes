import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nats from './nats';

dotenv.config();

// This probably doesn't need to be an Express app
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello from Broadcaster!');
});

nats.readMessages();

app.listen(port, () => {
  console.log(`Broadcaster started in port ${port}`);
});
