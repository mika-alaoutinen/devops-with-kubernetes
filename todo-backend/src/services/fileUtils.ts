import * as stream from 'stream';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const finished = promisify(stream.finished);
const readFile = promisify(fs.readFile);

const checkFileExists = async (
  dir: string,
  imageName: string,
): Promise<boolean> => new Promise((res) => {
  const filePath = path.join(dir, imageName);

  fs.stat(filePath, (err, stats) => ((err || !stats)
    ? res(false)
    : res(true)));
});

const readImage = async (dir: string, imageName: string): Promise<Buffer> => {
  const filePath = path.join(dir, imageName);
  try {
    return await readFile(filePath);
  } catch (e) {
    throw new Error(e);
  }
};

const writeImage = async (imageData: any, outputDir: string, imageName: string): Promise<void> => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const filePath = path.join(outputDir, imageName);
  const writer = fs.createWriteStream(filePath);

  imageData.pipe(writer);

  return finished(writer);
};

export default { checkFileExists, readImage, writeImage };
