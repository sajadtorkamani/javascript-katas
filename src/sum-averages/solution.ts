const sumAverage = (arrs: number[][]): number => {
  const sum = arrs.map(arr => arr.reduce(sumNums) / arr.length).reduce(sumNums)

  return Math.floor(sum)
}

const sumNums = (a: number, b: number) => a + b

export default sumAverage
