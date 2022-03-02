const findAB = (nums, c) => {
  for (let index = 0; index < nums.length - 1; index++) {
    const num = nums[index]
    const subsequentNums = nums.slice(index + 1)

    for (let subsequentNum of subsequentNums) {
      if (subsequentNum * num === c) {
        return [num, subsequentNum]
      }
    }
  }

  return null
}

export default findAB
