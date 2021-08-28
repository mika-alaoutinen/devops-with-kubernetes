import stream from 'stream';
import axios from 'axios';
import fileUtils from './fileUtils';

const dir = '/tmp/images';
const imageName = 'image.jpg';
const imageUrl = 'https://picsum.photos/1200';

const fetchAndSaveImage = async (): Promise<void> => {
  console.info('Fetching image from', imageUrl);
  const response = await axios.get<stream>(imageUrl, { responseType: 'stream' });
  await fileUtils.writeImage(response.data, dir, imageName);
};

const fetchImage = async (): Promise<Buffer> => {
  const fileExists = await fileUtils.checkFileExists(dir, imageName);

  if (!fileExists) {
    await fetchAndSaveImage();
  }

  return fileUtils.readImage(dir, imageName);
};

export default { fetchImage };
