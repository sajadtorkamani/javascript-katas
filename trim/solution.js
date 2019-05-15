/**
 * @param str {string}
 * @param size {number}
 */
const trim = (str, size) => {
  return str.length > size
    ? str.length > 3 ? str.substr(0, size - 3) + '...' : str.substr(0, size) + '...'
    : str;
};

export default trim;