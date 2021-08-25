import { v4 as uuidv4 } from 'uuid';

const addHash = (timestamp: string): string => `${timestamp} :: ${uuidv4()}`;

export default { addHash };
