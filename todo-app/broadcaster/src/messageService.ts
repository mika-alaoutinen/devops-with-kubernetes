import axios from 'axios';
import { Message } from './types';

const url = process.env.CHAT_SERVICE_URL || 'http://localhost:8000/echo';

const sendMessage = async (msg: Message): Promise<void> => {
  try {
    await axios.post(url, msg);
  } catch (error) {
    console.error('Error sending POST request to ', url);
  }
};

export default { sendMessage };
