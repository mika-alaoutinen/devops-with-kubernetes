import dotenv from 'dotenv';
import { Todo } from '../types';

dotenv.config();

const url = process.env.NATS_URL;

const send = async (todo: Todo): Promise<void> => {
  console.log('sending todo to NATS', todo);
  console.log('nats url', url);
};

export default { send };
