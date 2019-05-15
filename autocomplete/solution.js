/**
 * @param str {string}
 * @param dictionary {Array<string>}
 */
const autocomplete = (str, dictionary) => {
  str = str.replace(/[^A-Za-z]/g, '');
  const regex = new RegExp(`^${str}`, 'i');

  return dictionary
    .filter(word => regex.test(word))
    .slice(0, 5);
};

export default autocomplete;