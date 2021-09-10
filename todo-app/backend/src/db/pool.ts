import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE || 'todoapp',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

export const checkConnection = async (): Promise<boolean> => {
  try {
    const response = await pool.query('SELECT version()');
    const dbVersion: string = response.rows[0].version;
    return dbVersion.includes('PostgreSQL');
  } catch (error) {
    console.error('Check database connection failed', error);
    return false;
  }
};

export default pool;
