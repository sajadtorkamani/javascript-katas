/**
 * @param num {string}
 * @return {number}
 */
const solution = num => {
  let fiveDigitsRegex = /\d(?=(\d{4}))/g;
  let match;
  let fiveDigitsList = [];

  while (match = fiveDigitsRegex.exec(num)) {
    fiveDigitsList.push(match[0] + match[1]);
  }

  return Math.max(...fiveDigitsList);
};

export default solution;