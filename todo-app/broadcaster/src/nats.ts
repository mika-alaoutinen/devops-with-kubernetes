import { connect } from 'nats';
import { Message } from '../../todo-types';

const url = process.env.NATS_URL || 'nats://nats:4222';

const subscribe = async () => {
  const nc = await connect({ servers: url });
  const subscription = nc.subscribe('hello');
  // Do something with subscription
  subscription.unsubscribe();
};

// Read messages from NATS
const readMessage = async (): Promise<Message> => {
  console.log('Reading messages from NATS');

  return Promise.resolve({
    user: 'bot',
    message: 'hard coded message',
  });
};

export default { readMessage, subscribe };
