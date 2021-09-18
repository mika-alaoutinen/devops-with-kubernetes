const express = require('express');

const app = express();
const port = 8000;

app.use(express.json());

app.post('/echo', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Echo service started in port ${port}`);
});
