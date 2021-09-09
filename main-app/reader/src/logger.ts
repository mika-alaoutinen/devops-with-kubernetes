import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();
const message = process.env.MESSAGE || '';

const addHash = (timestamp: string): string => `${timestamp} :: ${uuidv4()}`;

const write = (timestamp: string, pingcount: string): string => {
  const hash = addHash(timestamp);
  const pings = `Ping / Pong: ${pingcount}`;
  return `${message} <br/> ${hash} <br/> ${pings}`;
};

export default { write };
