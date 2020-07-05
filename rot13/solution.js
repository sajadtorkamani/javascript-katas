/**
 * @param str {string}
 */
const rot13 = str => str.replace(/[A-Za-z]/g, encryptLetter)

/**
 * @param letter {string}
 * @return {string}
 */
export const encryptLetter = letter => {
  const alphabet = /[A-Z]/.test(letter)
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    : 'abcdefghijklmnopqrstuvwxyz'
  const nextLetterPos = alphabet.indexOf(letter) + 13

  return nextLetterPos >= alphabet.length
    ? alphabet.charAt(nextLetterPos % alphabet.length)
    : alphabet.charAt(nextLetterPos)
}

export default rot13
