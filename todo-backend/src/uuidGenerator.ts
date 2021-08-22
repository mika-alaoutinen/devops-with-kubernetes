import { v4 as uuidv4 } from 'uuid';

const uuid = uuidv4();

const createTimestampedUUID = (): string => {
  const timestamp = new Date().toISOString();
  return `${timestamp} :: ${uuid}`;
};

// Log a timestamped UUID every 5 seconds
export const logUUID = () => {
  console.log(createTimestampedUUID());
  setTimeout(logUUID, 5000);
};

export default { logUUID };
