import dotenv from 'dotenv';
import { connect, NatsConnection, StringCodec } from 'nats';
import { Message, Subject, Todo } from '../types';

dotenv.config();

const url = process.env.NATS_URL || 'nats://localhost:4222';

const getConnection = async (): Promise<NatsConnection> => {
  try {
    return await connect({ servers: url });
  } catch (error) {
    console.error('error connecting to NATS', error);
    throw error;
  }
};

const encodeMessage = (msg: Message): Uint8Array => StringCodec().encode(JSON.stringify(msg));

const writeMessage = async (subject: Subject, { message }: Todo): Promise<Message> => {
  const msg: Message = {
    user: 'todo-backend',
    message,
  };

  const nc = await getConnection();
  nc.publish(subject, encodeMessage(msg));
  nc.drain();

  return Promise.resolve(msg);
};

export default { writeMessage };
