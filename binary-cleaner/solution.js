const binaryCleaner = nums => {
  const numsLessThanTwo = nums.filter(num => num < 2);
  const indicesOfNumsGreaterThanOne = nums
    .map((num, index) => (num > 1 ? index : null))
    .filter(val => val !== null);

  return [numsLessThanTwo, indicesOfNumsGreaterThanOne];
};

export default binaryCleaner;
