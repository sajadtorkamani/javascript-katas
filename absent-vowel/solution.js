/**
 * @param {string} str
 * @returns {number}
 */
export const absentVowel = str => {
  return ['a', 'e', 'i', 'o', 'u'].findIndex(
    vowel => str.toLowerCase().indexOf(vowel) === -1
  );
};
