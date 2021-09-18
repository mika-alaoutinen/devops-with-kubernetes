import dotenv from 'dotenv';
import { connect } from 'nats';
import { Message, Todo } from '../types';

dotenv.config();

const url = process.env.NATS_URL || 'nats://nats:4222';

// eslint-disable-next-line no-unused-vars
const connectToNats = async () => connect({ servers: url });

const writeMessage = async ({ message }: Todo): Promise<Message> => {
  const msg: Message = {
    user: 'todo-backend',
    message,
  };
  // send msg to NATS
  return Promise.resolve(msg);
};

export default { writeMessage };
