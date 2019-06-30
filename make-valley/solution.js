/**
 * @param {number[]} nums
 * @returns {number[]}
 */
export const makeValley = nums => {
  let leftSide = [];
  let rightSide = [];

  nums
    .sort((a, b) => b - a)
    .forEach((num, index) => {
      if (index % 2 === 0) {
        leftSide.push(num);
      } else {
        rightSide.push(num);
      }
    });

  return leftSide.concat(rightSide.sort((a, b) => a - b));
};
