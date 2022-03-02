export const isHarshadNum = num => {
  return num % getDigitsSum(num) === 0
}

export const getDigitsSum = num => {
  return num
    .toString()
    .split('')
    .reduce((a, b) => a + Number(b), 0)
}

export const reverseNum = num => {
  const reversed = num
    .toString()
    .split('')
    .reverse()
    .join('')

  return Number(reversed)
}

export const numberJoy = num => {
  const digitsSum = getDigitsSum(num)

  return isHarshadNum(num) && digitsSum * reverseNum(digitsSum) === num
}
