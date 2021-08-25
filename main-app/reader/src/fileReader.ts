import fs from 'fs';
import path from 'path';

const dir = '/usr/src/app';
const fileName = 'timestamp.txt';
const filePath = path.join(dir, fileName);

// This reads the file just fine, but for some goddamn reason
// Express router just couldn't handle it.
const readTimestampAsync = async (): Promise<string | void> => {
  fs.readFile(filePath, 'utf8', (e, data) => {
    if (e) {
      return console.log('error writing file:', e);
    }
    return data;
  });
};

const readTimestamp = (): string => fs.readFileSync(filePath, 'utf8');

export default { readTimestamp, readTimestampAsync };
