import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

const checkFileExists = async (filePath: string) => new Promise((res) => {
  fs.stat(filePath, (err, stats) => ((err || !stats)
    ? res(false)
    : res(true)));
});

const readImage = async (filePath: string): Promise<string> => {
  try {
    return await readFile(filePath, 'utf8');
  } catch (e) {
    console.log('Could not read file', e);
    return '';
  }
};

const writeImage = async (image: any, filePath: string) => {
  image.pipe(fs.createWriteStream(filePath));
};

export default { checkFileExists, readImage, writeImage };
