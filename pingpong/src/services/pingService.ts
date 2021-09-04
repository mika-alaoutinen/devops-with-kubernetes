import { Response } from 'express';
import pool from '../db/pool';
import timestampService from './timestampService';

const insertPing = async (timestamp: string): Promise<void> => {
  pool.query('insert into pings (timestamp) values ($1)', [timestamp], (error, results) => {
    if (error) {
      console.log('error querying pings', error);
      throw error;
    }
    console.log('results', results);
  });
};

const pingCount = async (): Promise<void> => {
  pool.query('SELECT COUNT(*) FROM pings', (error, results) => {
    if (error) {
      console.log('error getting ping count', error);
      throw error;
    }

    console.log('ping count', results);
  });
};

// Exported functions
const getPings = async (res: Response): Promise<void> => {
  pool.query('SELECT * FROM pings', (error, results) => {
    if (error) {
      console.log('error querying pings', error);
      throw error;
    }
    res.send(results.rows);
  });
};

const savePing = async (): Promise<void> => {
  const timestamp = timestampService.getCurrentTimeStamp();
  await insertPing(timestamp);
  await pingCount();
};

export default { getPings, savePing };
