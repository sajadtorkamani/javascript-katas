/**
 * @param str {string}
 * @return {boolean}
 */
const solve = str => {
  return str
    .split('')
    .map(letter => letter.charCodeAt(0))
    .sort((a, b) => a - b)
    .every((charCode, index, charCodes) => {
      if (index === (charCodes.length - 1)) { // Skip last element
        return true;
      }

      return charCode + 1 === charCodes[index + 1];
    });
};

export default solve;