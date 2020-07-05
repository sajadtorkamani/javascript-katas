const add = (...nums) => {
  if (nums.length === 0) {
    return 0
  }

  const sum = nums.reduce((total, num, index) => total + num / (index + 1), 0)

  return Math.round(sum)
}

export default add
