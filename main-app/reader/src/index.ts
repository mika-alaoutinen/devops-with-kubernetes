import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Routes
app.use('/reader', routes);

// start the Express server
app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
