const mineColor = (file: string, rank: number): string => {
  return getFileRow(file)[rank - 1] === 'W' ? 'white' : 'black'
}

const getFileRow = (file: string): string[] => {
  return /[aceg]/.test(file)
    ? ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W']
    : ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B']
}

export default mineColor
