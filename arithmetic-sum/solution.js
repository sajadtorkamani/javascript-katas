export const ArithmeticSequenceSum = (a, r, n) => {
  let sum = 0

  for (let i = 1; i <= n; i++) {
    sum += a + (i - 1) * r
  }

  return sum
}
