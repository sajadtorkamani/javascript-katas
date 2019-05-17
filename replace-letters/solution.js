/**
 * @param {string} str
 * @return {string}
 */
const replaceLetters = str => {
  return str.replace(/\w/g, char => {
    return /[aeiou]/.test(char)
      ? getPreviousConsonant(char)
      : getNextVowel(char);
  });
};

/**
 * @param consonant {string}
 * @return {string}
 */
export const getNextVowel = consonant => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  const regex = new RegExp(`(?<=${consonant}\\w*)[aeiou]`);

  return alphabet.match(regex)[0];
};

/**
 * @param vowel {string}
 * @return {string}
 */
export const getPreviousConsonant = vowel => {
  return { a: 'z', e: 'd', i: 'h', o: 'n', u: 't' }[vowel];
};

export default replaceLetters;