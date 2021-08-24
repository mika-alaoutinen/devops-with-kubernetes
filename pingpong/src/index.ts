import express from 'express';

const app = express();
const port = 9080;

// Routes
app.get('/', (_req, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
