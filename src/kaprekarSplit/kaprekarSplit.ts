export const kaprekarSplit = (num: number): number => {
  if (num === 1) {
    return 0
  }

  const square = num * num
  const squareStr = square.toString()

  for (let index = 0; index < squareStr.length; index++) {
    const part1 = squareStr.slice(0, index + 1)
    const part2 = squareStr.slice(index + 1)
    const partsSum = Number(part1) + Number(part2)

    if (partsSum === num) {
      return index + 1
    }
  }

  return -1
}
