import express from 'express';
import uuidGen from './uuidGenerator';

const app = express();
const port = 8080;

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});

// Timeout so that port is logged first
setTimeout(() => uuidGen.logUUID(), 500);
