import cors from 'cors';
import express from 'express';
import routes from './routes/routes';

const port = 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
