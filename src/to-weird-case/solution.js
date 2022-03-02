/**
 * @param str {string}
 */
const toWeirdCase = str => {
  return str
    .split(' ')
    .map(toWeirdCaseWord)
    .join(' ')
}

/**
 * @param word {string}
 */
export const toWeirdCaseWord = word => {
  return word
    .split('')
    .map((letter, index) => {
      return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
    })
    .join('')
}

export default toWeirdCase
