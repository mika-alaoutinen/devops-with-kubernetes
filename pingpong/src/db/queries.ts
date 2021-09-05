import pool from './pool';

const insertPing = async (timestamp: string): Promise<void> => {
  pool.query('INSERT INTO pings (timestamp) VALUES ($1)', [timestamp], (error, results) => {
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

export default { insertPing, pingCount };
