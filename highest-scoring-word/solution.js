/**
 * @param str {string}
 */
const high = str => {
  return str
    .split(' ')
    .sort((a, b) => getWordScore(b) - getWordScore(a))[0];
};

/**
 * @param word {string}
 */
export const getWordScore = word => {
  return word
    .split('')
    .map(letter => letter.charCodeAt(0) - 96)
    .reduce((a, b) => a + b, 0);
};

export default high;