/**
 * @param numRows {number}
 * @returns {string}
 */
const pattern = numRows => {
  let rows = [];

  for (let rowNum = 1; rowNum <= numRows; rowNum++) {
    const row = rowNum === 1 ? '1' : '1' + '*'.repeat(rowNum - 1) + rowNum;

    rows.push(row);
  }

  return rows.join('\n');
};

export default pattern;
