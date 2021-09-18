import { Msg, StringCodec } from 'nats';
import { Message } from '../../todo-types';

export const parseMessage = (msg: Msg): Message => {
  const data = StringCodec().decode(msg.data);

  try {
    return JSON.parse(data) as Message;
  } catch (error) {
    console.log('Could not parse Message<user, message>', error);
    throw error;
  }
};

export const decodeMessage = (idx: number, msg: Message): string => `[${idx}] ${JSON.stringify(msg)}`;
