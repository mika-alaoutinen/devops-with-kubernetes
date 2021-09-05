import queries from '../db/queries';
import timestampService from './timestampService';

const savePing = async (): Promise<number> => {
  const newPing = await queries.insertPing(timestampService.getCurrentTimeStamp());

  const timestamp = timestampService.formatTimestamp(newPing.timestamp);
  console.info('timestamp', timestamp);

  return queries.pingCount();
};

export default { savePing };
