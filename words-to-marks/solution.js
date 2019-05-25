/**
 * @param {string} str
 * @return {number}
 */
const wordsToMarks = str => {
  return str
    .split('')
    .reduce((sum, letter) => sum + letter.charCodeAt(0) - 96, 0);
};

export default wordsToMarks;