export const missingNum = (nums: number[]): number => {
  const sortedNums = nums.sort((a, b) => a - b)

  for (let index = 0, expectedNum = 0; index <= 100; index++, expectedNum++) {
    if (sortedNums[index] !== expectedNum) {
      return expectedNum
    }
  }

  throw new Error('Should have returned a number by this point')
}
