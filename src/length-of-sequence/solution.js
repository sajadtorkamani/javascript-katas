/**
 * @param {number[]} nums
 * @param {number} n
 * @returns {mumber}
 */
export const lengthOfSequence = (nums, n) => {
  const count = nums.filter(v => v === n).length
  if (count !== 2) return 0

  const firstIndex = nums.indexOf(n)
  const lastIndex = nums.lastIndexOf(n)

  return lastIndex - firstIndex + 1
}
