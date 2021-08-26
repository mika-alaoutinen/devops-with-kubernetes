import fs from 'fs';
import path from 'path';

const dir = '/tmp';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const filePath = path.join(dir, 'pingcount.txt');

const write = (count: string): void => {
  const errorHandler = (e: any): void | null => (e
    ? console.log('error writing file:', e)
    : null);

  fs.writeFile(filePath, count, errorHandler);
};

export default { write };
