const validateSequence = nums => {
  const stepDiff = nums[1] - nums[0]

  return nums.slice(0, -1).every((num, index) => {
    return num + stepDiff === nums[index + 1]
  })
}

export default validateSequence
