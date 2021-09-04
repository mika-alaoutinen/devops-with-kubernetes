const getCurrentTimeStamp = (): string => {
  const timestamp = new Date().toISOString().split('T');
  const date = timestamp[0];
  const time = timestamp[1].slice(0, 8);
  return `${date} ${time}`;
};

export default { getCurrentTimeStamp };
