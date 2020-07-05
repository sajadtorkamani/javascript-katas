const sumOrProduct = (nums, n) => {
  const sortedNums = nums.sort((a, b) => a - b)

  const sum = sortedNums.slice(-n).reduce((a, b) => a + b)

  const product = sortedNums.slice(0, n).reduce((a, b) => a * b)

  switch (true) {
    case sum > product:
      return 'sum'
    case product > sum:
      return 'product'
    default:
      return 'same'
  }
}

export default sumOrProduct
