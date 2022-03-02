/**
 * @param str {string}
 */
const letterChange = str => {
  return str
    .split('')
    .map(getNextLetter)
    .join('')
}

/**
 * @param letter {string}
 */
export const getNextLetter = letter => {
  switch (letter) {
    case 'z':
      return 'a'
    case 'Z':
      return 'A'
    case ' ':
      return ' '
    default:
      return String.fromCharCode(letter.charCodeAt(0) + 1)
  }
}

export default letterChange
