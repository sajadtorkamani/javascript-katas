export const maxSumBetweenTwoNegatives = (nums: number[]): number => {
  const negativeNums = numsBetweenNegatives(nums)

  if (negativeNums === null) {
    return -1
  }

  if (negativeNums.length === 0) {
    return 0
  }

  return (
    negativeNums.map(n => n.reduce((a, b) => a + b)).sort((a, b) => b - a)[0] ||
    0
  )
}

export const numsBetweenNegatives = (
  nums: number[]
): Array<number[]> | null => {
  const negativeNums = []
  const negativeIndices: number[] = []

  nums.forEach((num, index) => {
    if (num < 0) {
      negativeIndices.push(index)
    }
  })

  if (negativeIndices.length < 2) {
    return null
  }

  for (let index = 0; index < negativeIndices.length - 1; index++) {
    const negativeIndex = negativeIndices[index]
    const nextNegativeIndex = negativeIndices[index + 1]

    const numsBetweenNegativeIndices = nums.slice(
      negativeIndex + 1,
      nextNegativeIndex
    )

    if (numsBetweenNegativeIndices.length > 0) {
      negativeNums.push(numsBetweenNegativeIndices)
    }
  }

  return negativeNums.length > 0 ? negativeNums : []
}
