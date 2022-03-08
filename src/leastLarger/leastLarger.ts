export const leastLarger = (nums: number[], index: number): number => {
  const numAtIndex = nums[index]
  const numsLargerThanNumAtIndex = nums.filter((num, numIndex) => {
    return numIndex !== index && num > numAtIndex
  })
  const leastLargestNum = numsLargerThanNumAtIndex.sort((a, b) => a - b)[0]
  
  return nums.indexOf(leastLargestNum)
}
