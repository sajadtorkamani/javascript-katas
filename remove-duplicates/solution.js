export const solve = nums => {
  let uniqueNums = [];

  nums.forEach(num => {
    if (!uniqueNums.includes(num)) {
      uniqueNums.push(num);
    }
  });

  return uniqueNums.sort((a, b) => nums.lastIndexOf(a) - nums.lastIndexOf(b));
};