const allNonConsecutive = nums => {
  const nonConsecutives = []

  for (let index = 1; index < nums.length; index++) {
    const currentNum = nums[index]
    const previousNum = nums[index - 1]

    if (currentNum !== previousNum + 1) {
      nonConsecutives.push({ i: index, n: currentNum })
    }
  }

  return nonConsecutives
}

export default allNonConsecutive
