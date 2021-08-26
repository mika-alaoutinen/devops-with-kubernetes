import { v4 as uuidv4 } from 'uuid';

const addHash = (timestamp: string): string => `${timestamp} :: ${uuidv4()}`;

const write = (timestamp: string, pingcount: string): string => {
  const hash = addHash(timestamp);
  const pings = `Ping / Pong: ${pingcount}`;
  return `${hash} <br/> ${pings}`;
};

export default { write };
