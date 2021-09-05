import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  database: process.env.POSTGRES_NAME || 'pingpong',
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

export default pool;
