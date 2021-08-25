import express from 'express';

const app = express();
const port = 8080;

// Routes
app.get('/', (_req, res) => {
  res.send('Hello from Main App Reader!');
});

// start the Express server
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
