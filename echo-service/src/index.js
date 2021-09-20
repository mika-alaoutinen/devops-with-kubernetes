const express = require('express');

const app = express();
const port = 8000;

const messages = [];

app.use(express.json());

app.get('/', (req, res) => {
  console.log('this is echo service');
});

app.get('/echo', (req, res) => {
  res.send(messages);
})

app.post('/echo', (req, res) => {
  console.log(req.body);
  messages.push(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Echo service started in port ${port}`);
});
