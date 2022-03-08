export const multipleAndDigitSums = (num: number): number => {
  const multiples = multiplesOf(num)

  const multiplesDigitSums = multiples.map(multiple =>
    multiple
      .toString()
      .split('')
      .reduce((a, b) => Number(a) + Number(b), 0)
  )

  return multiplesDigitSums.reduce((a, b) => a + b)
}

const multiplesOf = (num: number): number[] => {
  const multiples = []

  for (let n = num; n <= 100; n += num) {
    multiples.push(n)
  }

  return multiples
}
