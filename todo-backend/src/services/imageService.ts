import axios from 'axios';
import fileUtils from './fileUtils';

// const dir = path.join('/', 'tmp', 'images');
const dir = './images';
const imageUrl = 'https://picsum.photos/1200';

// const fetchImage = async (url: string): Promise<any> => {
//   const fileExists = await fileUtils.checkFileExists(filePath);
//   if (fileExists) {
//     return fileUtils.readImage(filePath);
//   }

//   const response = await axios.get(url, { responseType: 'stream' });
//   const image = response.data;
//   fileUtils.writeImage(image, filePath);

//   return image;
// };

const fetchImage = async (): Promise<void> => {
  const response = await axios.get(imageUrl, { responseType: 'stream' });
  fileUtils.writeImage(response.data, dir);
};

export default { fetchImage };
