/**
 * @param str {string}
 * @return {boolean}
 */
const isValid = str => {
  return /^[a-z_$][\w$]*$/i.test(str)
}

export default isValid
