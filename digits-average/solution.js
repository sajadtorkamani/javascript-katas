export const digitsAverage = num => {
  let result = num
    .toString()
    .split('')
    .map(Number)

  while (result.length > 1) {
    let iterationResult = []

    for (let i = 0; i < result.length - 1; i++) {
      const average = Math.ceil((result[i] + result[i + 1]) / 2)
      iterationResult.push(average)
    }

    result = iterationResult
  }

  return result[0]
}
