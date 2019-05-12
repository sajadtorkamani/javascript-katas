/**
 * @param text {string}
 */
const autocorrect = text => {
  return text.replace(/\b(yo(u)+|u)\b/gi, 'your sister');
};

export default autocorrect;