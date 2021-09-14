import dotenv from 'dotenv';
import { connect } from 'nats';
import { Todo } from '../types';

dotenv.config();

const url = process.env.NATS_URL || 'nats://nats:4222';

// eslint-disable-next-line no-unused-vars
const connectToNats = async () => connect({ servers: url });

const send = async (todo: Todo): Promise<void> => {
  console.log('sending todo to NATS', todo);
  console.log('nats url', url);
};

export default { send };
