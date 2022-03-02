/**
 * @param a {string}
 * @param b {string}
 * @return {boolean}
 */
const isAnagram = (a, b) => {
  const str1 = normalize(a)
  const str2 = normalize(b)

  if (str1.length !== str2.length) {
    return false
  }

  const str2LetterCounts = getLetterCounts(str2)

  for (let letter in str2LetterCounts) {
    const str2LetterCount = str2LetterCounts[letter]
    const str1LetterCount = (str1.match(new RegExp(letter, 'g')) || []).length

    if (str1LetterCount !== str2LetterCount) {
      return false
    }
  }

  return true
}

/**
 * @param str
 * @return {string}
 */
const normalize = str => str.toLowerCase().replace(/\W/g, '')

/**
 * @param str {string}
 * @returns {Object}
 */
const getLetterCounts = str => {
  let letterCounts = {}

  str.split('').forEach(letter => {
    letterCounts[letter] = letterCounts.hasOwnProperty(letter)
      ? letterCounts[letter] + 1
      : 1
  })

  return letterCounts
}

export default isAnagram
