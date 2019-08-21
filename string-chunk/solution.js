const stringChunk = (str, chunkSize) => {
  if (chunkSize < 1 || typeof chunkSize !== 'number') {
    return [];
  }

  const chunkRegex = new RegExp(`.{1,${chunkSize}}`, 'g');

  return str.match(chunkRegex);
};

export default stringChunk;
