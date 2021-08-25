import fs from 'fs';
import path from 'path';

const dir = '/tmp';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const filePath = path.join(dir, 'timestamp.txt');

const writeToFile = (): void => {
  const errorHandler = (e: any): void | null => (e
    ? console.log('error writing file:', e)
    : null);

  fs.writeFile(filePath, new Date().toISOString(), errorHandler);
};

export const writeTimestampEveryFiveSeconds = () => {
  writeToFile();
  setTimeout(writeTimestampEveryFiveSeconds, 5000);
};

export default { writeTimestampEveryFiveSeconds };
