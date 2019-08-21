/**
 * @param {number[]} nums
 * @returns {boolean}
 */
const isCircleSorted = nums => {
  const halfIndex = nums.findIndex((num, index) => nums[index + 1] < num);
  const firstHalf = nums.slice(0, halfIndex + 1);
  const secondHalf = nums.slice(halfIndex + 1);
  const sortedSecondHalf = secondHalf.slice().sort((a, b) => a - b);

  return (
    secondHalf.toString() === sortedSecondHalf.toString() &&
    Math.max(...secondHalf) < Math.min(...firstHalf)
  );
};

export default isCircleSorted;
