import fs from 'fs';
import path from 'path';
import util from 'util';

const dir = '/tmp';
const readFile = util.promisify(fs.readFile);

const readPings = async (): Promise<string> => {
  const filePath = path.join(dir, 'pingcount.txt');

  try {
    return await readFile(filePath, 'utf8');
  } catch (e) {
    console.log('Could not read file', e);
    return '';
  }
};

const readTimestamp = async (): Promise<string> => {
  const filePath = path.join(dir, 'timestamp.txt');

  try {
    return await readFile(filePath, 'utf8');
  } catch (e) {
    console.log('Could not read file', e);
    return '';
  }
};

export default { readPings, readTimestamp };
