import { Response } from 'express';
import pool from '../db/pool';
import queries from '../db/queries';
import timestampService from './timestampService';

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
  await queries.insertPing(timestamp);
  await queries.pingCount();
};

export default { getPings, savePing };
