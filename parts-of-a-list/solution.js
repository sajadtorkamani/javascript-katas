/**
 * @param {Array<string>} arr
 * @returns {Array<Array>}
 */
const partlist = arr => {
  let result = [];

  for (let index = 0; index < arr.length - 1; index++) {
    const part1 = arr.slice(0, index + 1).join(' ');
    const part2 = arr.slice(index + 1).join(' ');

    result.push([part1, part2]);
  }

  return result;
};

export default partlist;