/**
 * @param str {string}
 */
const firstNonRepeatingLetter = str => {
  return str
    .split('')
    .find(letter => {
      return str.match(new RegExp(letter, 'gi')).length === 1;
    }) || '';
};

export default firstNonRepeatingLetter;