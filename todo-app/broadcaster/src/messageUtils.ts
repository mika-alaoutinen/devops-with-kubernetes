import { Msg, StringCodec } from 'nats';
import { Message } from '../../todo-types';

export const logMessage = (idx: number, msg: Message): void => {
  console.log(`[${idx}] ${JSON.stringify(msg)}`);
};

export const parseMessage = (msg: Msg): Message => {
  const data = StringCodec().decode(msg.data);

  try {
    return JSON.parse(data) as Message;
  } catch (error) {
    console.log('Could not parse Message<user, message>', error);
    throw error;
  }
};
