import pool from './pool';
import { Ping } from '../types';

const insertPing = async (timestamp: string): Promise<Ping> => {
  // By default, node-postgres doesn't return the data that is inserted
  const sql = 'INSERT INTO pings (timestamp) VALUES ($1) RETURNING *';

  try {
    const response = await pool.query(sql, [timestamp]);
    console.log('insert response', response);
    return response.rows[0];
  } catch (error) {
    console.log('error querying pings', error);
    throw error;
  }
};

const pingCount = async (): Promise<number> => {
  const sql = 'SELECT COUNT(*) FROM pings';

  try {
    const response = await pool.query(sql);
    return response.rows[0].count; // How to make this type safe?
  } catch (error) {
    console.log('error getting ping count', error);
    throw error;
  }
};

export default { insertPing, pingCount };
