/**
 * @param {string} str
 * @returns {boolean}
 */
export const validateWord = str => {
  let charCounts = {}

  str
    .toLowerCase()
    .split('')
    .forEach(char => {
      charCounts[char] = charCounts.hasOwnProperty(char)
        ? charCounts[char] + 1
        : 1
    })

  const counts = Object.values(charCounts)

  return counts.slice(1).every(count => count === counts[0])
}
