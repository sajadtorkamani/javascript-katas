const intDiff = (nums, n) => {
  let result = 0

  nums.forEach((num, index) => {
    result += nums
      .slice(index + 1)
      .filter(subsequentNum => Math.abs(num - subsequentNum) === n).length
  })

  return result
}

export default intDiff
