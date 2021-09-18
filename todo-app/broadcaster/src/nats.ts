import {
  connect, NatsConnection, Subscription, StringCodec,
} from 'nats';
import { Message, Subject } from '../../todo-types';

const url = process.env.NATS_URL || 'nats://localhost:4222';

const getConnection = async (): Promise<NatsConnection> => {
  try {
    return await connect({ servers: url });
  } catch (error) {
    console.error('error connecting to NATS', error);
    throw error;
  }
};

const subscribe = async (...subjects: Subject[]): Promise<Subscription[]> => {
  const nc = await getConnection();
  return subjects.map((s) => nc.subscribe(s));
};

// Read messages from NATS
const readMessage = async (): Promise<Message> => {
  const subscriptions = await subscribe('TODO_ADDED', 'TODO_UPDATED');
  const sub = subscriptions[0];

  (async () => {
    // eslint-disable-next-line no-restricted-syntax
    for await (const m of sub) {
      console.log(`[${sub.getProcessed()}]: ${StringCodec().decode(m.data)}`);
    }
    console.log('subscription closed');
  })();

  return Promise.resolve({
    user: 'bot',
    message: 'hard coded message',
  });
};

export default { readMessage };
