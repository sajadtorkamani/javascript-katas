/**
 * @param {Array<Array>} field
 * @returns {Array<number>}
 */
const mineLocation = field => {
  for (let rowIndex = 0; rowIndex < field.length; rowIndex++) {
    for (let colIndex = 0; colIndex < field.length; colIndex++) {
      if (field[rowIndex][colIndex] === 1) {
        return [rowIndex, colIndex];
      }
    }
  }
};

export default mineLocation;
