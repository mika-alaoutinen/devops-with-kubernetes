import { connect, NatsConnection, Subscription } from 'nats';
import { decodeMessage, parseMessage } from './messageUtils';
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

// Straight from nats' own documentation. No idea how else to do this.
const readMessagesLoop = async (sub: Subscription): Promise<Message | string> => {
  // eslint-disable-next-line no-restricted-syntax
  for await (const msg of sub) {
    return parseMessage(msg);
  }
  return 'subscription closed';
};

// Read messages from NATS
const readMessages = async (): Promise<void> => {
  const subscriptions = await subscribe('TODO_ADDED', 'TODO_UPDATED');
  const sub = subscriptions[0];

  const msg = await readMessagesLoop(sub);
  if (typeof msg !== 'string') {
    console.log(decodeMessage(sub.getProcessed(), msg));
  }
};

export default { readMessages };
