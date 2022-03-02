export const christmasTree = height => {
  let rows = []
  const highestRow = height * 2 - 1

  for (let index = highestRow; index >= 1; index -= 2) {
    const numStars = index
    const numPads = (highestRow - numStars) / 2
    const row = ' '.repeat(numPads) + '*'.repeat(numStars) + ' '.repeat(numPads)

    rows.push(row)
  }

  return rows.reverse().join('\n')
}
