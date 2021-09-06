import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/routes';

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
