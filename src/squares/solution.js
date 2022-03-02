/**
 * @param {number} start
 * @param {number} count
 * @returns {number[]}
 */
export const squares = (start, count) => {
  if (count <= 0) {
    return []
  }

  let squares = [start]

  for (let i = 1; i < count; i++) {
    const prevNum = squares[i - 1]
    squares.push(prevNum * prevNum)
  }

  return squares
}
