export const sumCubes = n => {
  let sum = 0

  for (let num = 1; num <= n; num++) {
    sum += Math.pow(num, 3)
  }

  return sum
}
