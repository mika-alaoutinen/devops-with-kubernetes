import express from 'express';
import writer from './timestampWriter';

const app = express();
const port = 8081;

// Routes
app.get('/writer', (_req, res) => {
  res.send('This is Main App Writer');
});

// start the Express server
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});

// Timeout so that port is logged first
setTimeout(() => writer.writeTimestampEveryFiveSeconds(), 500);
