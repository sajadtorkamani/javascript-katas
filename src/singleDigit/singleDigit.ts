export const singleDigit = (num: number): number => {
  if (num < 10) {
    return num
  }

  const binarySum = num
    .toString(2)
    .split('')
    .reduce((a, b) => Number(a) + Number(b), 0)

  return binarySum < 10 ? binarySum : singleDigit(binarySum)
}
