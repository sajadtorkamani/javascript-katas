const add = (...nums) => {
  return nums.map((num, index) => num * (index + 1)).reduce((a, b) => a + b, 0)
}

export default add
