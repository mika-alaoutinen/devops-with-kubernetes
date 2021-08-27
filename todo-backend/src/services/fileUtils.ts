import * as stream from 'stream';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const finished = promisify(stream.finished);
const readFile = promisify(fs.readFile);

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

const writeImage = async (imageData: any, outputDir: string) => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const filePath = path.join(outputDir, 'image.jpg');
  const writer = fs.createWriteStream(filePath);

  imageData.pipe(writer);

  return finished(writer);
};

export default { checkFileExists, readImage, writeImage };
