/**
 * @param str {string}
 * @return {Array<string>}
 */
const wave = str => {
  return str
    .split('')
    .map((char, index) => {
      return char === ' ' ? undefined : replaceCharAt(str, index, char.toUpperCase());
    })
    .filter(Boolean);
};

/**
 * @param str {string}
 * @param index {number}
 * @param val {string}
 * @return {string}
 */
export const replaceCharAt = (str, index, val) => {
  if (index >= str.length) {
    return str;
  }

  return str.substr(0, index) + val + str.substr(index + 1);
};

export default wave;