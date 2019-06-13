/**
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */
const matrixAddition = (a, b) => {
  return a.map((row, rowIndex) => {
    return row.map((col, colIndex) => col + b[rowIndex][colIndex]);
  });
};

export default matrixAddition;
