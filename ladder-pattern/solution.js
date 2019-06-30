/**
 * @param {number} num
 * @returns {string}
 */
export const pattern = num => {
  let rows = [];

  for (let row = 1; row <= num; row++) {
    if (row % 2 === 1) {
      rows.push(row.toString().repeat(row));
    }
  }

  return rows.join('\n');
};
