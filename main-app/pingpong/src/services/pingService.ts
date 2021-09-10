import queries from '../db/queries';
import timestampService from './timestampService';

const savePing = async (): Promise<number> => {
  const newPing = await queries.insertPing(timestampService.getCurrentTimeStamp());
  // Don't need to return newPing, however it could be done
  timestampService.formatTimestamp(newPing.timestamp);
  return queries.pingCount();
};

export default { savePing };
