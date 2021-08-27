import * as stream from 'stream';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
// import fileUtils from './fileUtils';

const finished = promisify(stream.finished);

// const dir = path.join('/', 'tmp', 'images');
const dir = './images';
const filename = 'image.jpg';
const filePath = path.join(dir, filename);

const downloadFile = async (url: string, outputPath: string): Promise<any> => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const writer = fs.createWriteStream(outputPath);

  return axios({
    method: 'get',
    url,
    responseType: 'stream',
  }).then(async (response) => {
    response.data.pipe(writer);
    return finished(writer);
  });
};

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

const fetchRandomImage = async (): Promise<any> => {
  const url = 'https://picsum.photos/1200';
  downloadFile(url, filePath);
};

export default { fetchRandomImage };
