import fs from 'fs';
import path from 'path';
import util from 'util';

const dir = '/tmp';
const fileName = 'timestamp.txt';
const filePath = path.join(dir, fileName);

const readFile = util.promisify(fs.readFile);

const readTimestamp = async (): Promise<string> => {
  try {
    return await readFile(filePath, 'utf8');
  } catch (e) {
    console.log('Could not read file', e);
    return '';
  }
};

export default { readTimestamp };
