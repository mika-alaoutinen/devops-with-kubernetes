import fs from 'fs';

const writeToFile = (): void => {
  const errorHandler = (e: any): void | null => (e
    ? console.log('error writing file:', e)
    : null);

  const fileName = 'timestamp.txt';
  const timestamp = new Date().toISOString();
  fs.writeFile(fileName, timestamp, errorHandler);
};

export const writeTimestampEveryFiveSeconds = () => {
  writeToFile();
  setTimeout(writeTimestampEveryFiveSeconds, 5000);
};

export default { writeTimestampEveryFiveSeconds };
