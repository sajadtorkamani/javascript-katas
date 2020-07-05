/**
 * @param str {string}
 * @returns {boolean}
 */
const validate = str => {
  return /^MDZHB \d{2} \d{3} [A-Z]+ \d{2} \d{2} \d{2} \d{2}$/.test(str)
}

export default validate
