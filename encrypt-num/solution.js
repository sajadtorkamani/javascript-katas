/**
 * @param num {string}
 * @return {string|false}
 */
const encryptNum = num => {
  const isValidItalianNum = /^(\+39|0039)[ .]?\d{3}[ .]?\d{3}[ .]?\d{3}/.test(num);
  const isValidUsaNum = /^1[ .-]?\d{3}[ .-]?\d{3}[ .-]?\d{4}/.test(num);

  return isValidItalianNum || isValidUsaNum
    ? num.replace(/\d{2}([ .-])?\d{4}$/, (m, separator = '') => `XX${separator}XXXX`)
    : false;
};

export default encryptNum;