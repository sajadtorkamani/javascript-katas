const streetFighterSelection = (fighters, position, moves) => {
  const ROW_LEN = 2
  const COL_LEN = 6

  let [row, col] = position

  return moves.map(move => {
    switch (move) {
      case 'up':
        row = row - 1 === -1 ? row : row - 1
        break
      case 'right':
        col = col + 1 === COL_LEN ? 0 : col + 1
        break
      case 'down':
        row = row + 1 === ROW_LEN ? row : row + 1
        break
      case 'left':
        col = col - 1 === -1 ? COL_LEN - 1 : col - 1
        break
    }

    return fighters[row][col]
  })
}

export default streetFighterSelection
