/**
 * @param {string} str
 * @return {boolean}
 */
const validISBN10 = str => {
  if (!/^\d{9}(\d|X)$/.test(str)) {
    return false;
  }

  return str
    .split('')
    .map((digit, index) => digit === 'X' ? 100 : digit * (index + 1))
    .reduce((sum, v) => sum + v) % 11 === 0;
};

export default validISBN10;