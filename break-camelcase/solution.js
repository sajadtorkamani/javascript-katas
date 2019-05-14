/**
 * @param str {string}
 */
const solution = str => {
  return str.replace(/(?<=[a-z])[A-Z]/g, m => ' ' + m);
};

export default solution;