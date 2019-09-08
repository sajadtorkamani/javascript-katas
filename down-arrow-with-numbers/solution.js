/**
 * @param n {number}
 * @returns {string}
 */
const getADownArrowOf = n => {
  if (n <= 0) {
    return '';
  }

  let rows = [];

  for (let rowNum = n; rowNum >= 1; rowNum--) {
    rows.push(getRowString(rowNum));
  }

  const longestRowLen = rows[0].length;

  return rows
    .map(row => {
      const numLeadingSpaces = (longestRowLen - row.length) / 2;
      return ' '.repeat(numLeadingSpaces) + row;
    })
    .join('\n');
};

/**
 *
 * @param n {number}
 * @returns {string}
 */
export const getRowString = n => {
  let leftSide = '';

  const normaliseNum = num => num > 9 ? num.toString().slice(-1) : num;

  for (let num = 1; num < n; num++) {
    leftSide += normaliseNum(num);
  }

  const rightSide = leftSide
    .split('')
    .reverse()
    .join('');

  return leftSide + normaliseNum(n) + rightSide;
};

export default getADownArrowOf;
