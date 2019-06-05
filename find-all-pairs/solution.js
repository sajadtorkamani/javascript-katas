/**
 * @param nums {Array<number>}
 * @return {number}
 */
const duplicates = nums => {
  const matches = nums
    .sort((a, b) => a - b)
    .toString()
    .match(/(\b\d+\b),\1/g);

  return (matches || []).length;
};

export default duplicates;