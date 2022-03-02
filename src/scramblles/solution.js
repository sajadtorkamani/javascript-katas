/**
 * @param s1 {string}
 * @param s2 {String}
 */
const scramble = (s1, s2) => {
  let letterCounts = {}

  s2.split('').forEach(letter => {
    letterCounts[letter] = letterCounts.hasOwnProperty(letter)
      ? letterCounts[letter] + 1
      : 1
  })

  for (let letter in letterCounts) {
    const s2LetterCount = letterCounts[letter]
    const s1LetterCount = (s1.match(new RegExp(letter, 'g')) || []).length

    if (s1LetterCount < s2LetterCount) {
      return false
    }
  }

  return true
}

export default scramble
