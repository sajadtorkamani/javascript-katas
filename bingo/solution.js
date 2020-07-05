const bingo = nums => {
  const letters = nums.map(num => String.fromCharCode(64 + num))

  return letters.includes('B') &&
    letters.includes('I') &&
    letters.includes('N') &&
    letters.includes('G') &&
    letters.includes('O')
    ? 'WIN'
    : 'LOSE'
}

export default bingo
