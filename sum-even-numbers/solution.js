const sumEvenNumbers = nums => {
  return nums.reduce((acc, num) => acc + (num % 2 === 0 ? num : 0), 0)
}

export default sumEvenNumbers
