export const isCoprime = (num1: number, num2: number): boolean => {
  const num1Factors = factors(num1)
  const num2Factors = factors(num2)

  const sharedFactors = num1Factors.filter(num1Factor => {
    return num2Factors.includes(num1Factor)
  })

  return Math.max(...sharedFactors) === 1
}

const factors = (num: number): number[] => {
  const factors = []

  for (let n = 1; n <= num; n++) {
    if (num % n === 0) {
      factors.push(n)
    }
  }

  return factors
}
