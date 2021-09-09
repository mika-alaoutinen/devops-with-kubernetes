/**
 * Formats a date that is in ISO format (e.g. 2021-09-05T07:03:21.000Z) into
 * a simpler format of 2021-09-05 07:03:21.
 */
const formatTimestamp = (datetime: Date): string => {
  const timestamp = datetime.toISOString().split('T');
  const date = timestamp[0];
  const time = timestamp[1].slice(0, 8);
  return `${date} ${time}`;
};

const getCurrentTimeStamp = (): string => formatTimestamp(new Date());

export default { formatTimestamp, getCurrentTimeStamp };
