/**
 * @param {string} str
 * @return {number|NaN}
 */
const myParseInt = str => {
  return /^\d+$/.test(str.trim()) ? +str : 'isNaN';
};

export default myParseInt;