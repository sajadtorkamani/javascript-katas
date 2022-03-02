/**
 * @param str {string}
 */
const toUnderscore = str => {
  return str
    .toString()
    .replace(/^[A-Z]/, m => m.toLowerCase())
    .replace(/[A-Z]/g, m => '_' + m.toLowerCase())
}

export default toUnderscore
