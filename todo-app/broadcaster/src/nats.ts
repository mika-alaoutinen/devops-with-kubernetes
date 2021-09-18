import { connect, NatsConnection, Subscription } from 'nats';
import messageService from './messageService';
import { decodeMessage, parseMessage } from './messageUtils';
import { Subject } from '../../todo-types';

const url = process.env.NATS_URL || 'nats://localhost:4222';

const getConnection = async (): Promise<NatsConnection> => {
  try {
    return await connect({ servers: url });
  } catch (error) {
    console.error('error connecting to NATS', error);
    throw error;
  }
};

const subscribe = async (subject: Subject): Promise<Subscription> => {
  const nc = await getConnection();
  return nc.subscribe(subject);
};

// Straight from nats' own documentation. No idea how else to do this.
const handleMessage = async (sub: Subscription) => {
  console.log(`listening for ${sub.getSubject()}`);

  // eslint-disable-next-line no-restricted-syntax
  for await (const msg of sub) {
    const message = decodeMessage(sub.getProcessed(), parseMessage(msg));
    console.log(message);
    messageService.sendMessage(message);
  }
};

const readMessages = async (): Promise<void> => {
  handleMessage(await subscribe('TODO_ADDED'));
  handleMessage(await subscribe('TODO_UPDATED'));
};

export default { readMessages };
