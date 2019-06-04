/**
 * @param nums {Array<number>}
 * @returns {Array<number>}
 */
const sumConsecutives = nums => {
  return nums
    .toString()
    .match(/(-?\d+)(,\1)*/g)
    .map(consecutiveNumsStr => {
      return consecutiveNumsStr
        .split(',')
        .reduce((a, b) => a + Number(b), 0);
    });
};

export default sumConsecutives;