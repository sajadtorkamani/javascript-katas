export const getCorrectPositionsCount = word => {
  return word
    .toLowerCase()
    .split('')
    .filter((letter, index) => letter === String.fromCharCode(97 + index))
    .length
}

const solve = words => words.map(getCorrectPositionsCount)

export default solve
