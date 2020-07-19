const completeSeries = nums => {
  if (hasDuplicates(nums)) {
    return [0]
  }

  const result = []
  const highestNum = Math.max(...nums)

  for (let num = 0; num <= highestNum; num++) {
    result.push(num)
  }

  return result
}

const hasDuplicates = arr => new Set(arr).size !== arr.length

export default completeSeries
