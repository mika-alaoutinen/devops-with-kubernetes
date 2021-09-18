import dotenv from 'dotenv';
import { connect } from 'nats';
import { Message, Todo } from '../../../todo-types';

dotenv.config();

const url = process.env.NATS_URL || 'nats://nats:4222';

const subscribe = async () => {
  const nc = await connect({ servers: url });
  const subscription = nc.subscribe('hello');
  // Do something with subscription
  subscription.unsubscribe();
};

const writeMessage = async ({ message }: Todo): Promise<Message> => {
  const msg: Message = {
    user: 'todo-backend',
    message,
  };
  // send msg to NATS
  return Promise.resolve(msg);
};

export default { subscribe, writeMessage };
