/**
 * @param str {string}
 * @param chunkSize {number}
 */
const revrot = (str, chunkSize) => {
  if (!str || chunkSize < 1 || chunkSize > str.length) {
    return '';
  }

  const chunksRegex = new RegExp(`\\d{${chunkSize}}`, 'g');

  return str
    .match(chunksRegex)
    .map(formatChunk)
    .join('');
};

/**
 * @param chunk {string}
 * @return {string}
 */
const formatChunk = chunk => {
  const digits = chunk.split('');

  const cubesSum = digits
    .map(digit => Math.pow(digit, 3))
    .reduce((a, b) => a + b);

  return cubesSum % 2 === 0
    ? digits.reverse().join('')
    : chunk.slice(1) + chunk[0];
};

export default revrot;