import express from 'express';
import logsRouter from './routes/logs';
import uuidGen from './uuidGenerator';

const app = express();
const port = 8080;

// Routes
app.get('/', (_req, res) => {
  res.send('Hello from Main App Writer!');
});

app.use('/log', logsRouter);

// start the Express server
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});

// Timeout so that port is logged first
setTimeout(() => uuidGen.logUUID(), 500);
