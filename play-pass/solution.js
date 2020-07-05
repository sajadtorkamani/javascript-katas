/**
 * @param {string} str
 * @param {number} offset
 * @returns {string}
 */
const playPass = (str, offset) => {
  return str
    .split('')
    .map((char, index) => {
      if (/[A-Z]/.test(char)) {
        const offsetLetter = handleLetterOffset(char, offset)
        return handleLetterIndex(offsetLetter, index)
      }

      if (/[0-9]/.test(char)) {
        return handleDigit(+char)
      }

      return char
    })
    .reverse()
    .join('')
}

/**
 *
 * @param {string} letter
 * @param {number} offset
 * @returns {string}
 */
export const handleLetterOffset = (letter, offset) => {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const letterIndex = ALPHABET.indexOf(letter)
  const offsetIndex = (letterIndex + offset) % 26

  return ALPHABET.charAt(offsetIndex)
}

/**
 * @param {string} letter
 * @param {number} index
 * @returns {string}
 */
export const handleLetterIndex = (letter, index) => {
  return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
}

/**
 * @param {number} digit
 * @return {number}
 */
export const handleDigit = digit => 9 - digit

export default playPass
