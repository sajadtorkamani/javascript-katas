/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
const mix = (s1, s2) => {
  const s1Counts = getMultiOccurringLetterCounts(s1);
  const s2Counts = getMultiOccurringLetterCounts(s2);
  const letters = new Set(Object.keys(s1Counts).concat(Object.keys(s2Counts)));

  return Array
    .from(letters)
    .map(letter => {
      const s1Count = s1Counts[letter] || 0;
      const s2Count = s2Counts[letter] || 0;

      switch (true) {
        case s1Count > s2Count: return `1:${letter.repeat(s1Count)}`;
        case s2Count > s1Count: return `2:${letter.repeat(s2Count)}`;
        default: return `=:${letter.repeat(s1Count)}`;
      }
    })
    .sort((a, b) => {
      if (a.length === b.length) {
        switch (true) {
          case a[0] === '=' && b[0] !== '=': return 1;
          case b[0] === '=' && a[0] !== '=': return -1;
          default: return a.localeCompare(b);
        }
      }

      return b.length - a.length;
    })
    .join('/');
};

/**
 * @param {string} str
 * @return {Object}
 */
export const getMultiOccurringLetterCounts = str => {
  let letterCounts = {};

  str.match(/[a-z]/g).forEach(letter => {
    letterCounts[letter] = letterCounts.hasOwnProperty(letter) ? letterCounts[letter] + 1 : 1;
  });

  for (let letter in letterCounts) {
    if (letterCounts[letter] === 1) {
      delete letterCounts[letter];
    }
  }

  return letterCounts;
};

export default mix;