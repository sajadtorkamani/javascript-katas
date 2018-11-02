/**
 * @param str {string}
 * @returns {string}
 */
export const moveTen = str => {
  return str
    .split('')
    .map(tenAlphabetsAhead)
    .join('');
};

/**
 * @param letter {string}
 * @returns {string}
 */
export const tenAlphabetsAhead = letter => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const tenAheadPosition = alphabet.indexOf(letter) + 10;

  return tenAheadPosition > 25
    ? alphabet[tenAheadPosition - 26]
    : alphabet[tenAheadPosition];
};

