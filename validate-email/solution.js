/**
 * @param str {string}
 * @return {boolean}
 */
const validate = str => {
  return /^[A-Za-z]\w*@[\w-]+\.[\w.]+$/.test(str);
};

export default validate;