import axios from 'axios';

const url = 'https://picsum.photos/1200';

const fetchImage = async (): Promise<string> => {
  try {
    return await axios.get(url);
  } catch (error) {
    throw new Error(error);
  }
};

export default { fetchImage };
