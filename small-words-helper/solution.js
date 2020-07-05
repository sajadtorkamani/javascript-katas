/**
 * @param {string} str
 * @returns {string}
 */
const smallWordHelper = str => {
  return str
    .split(' ')
    .map(word => {
      return word.length <= 3
        ? word.toUpperCase()
        : word.replace(/[aeiou]/gi, '')
    })
    .join(' ')
}

export default smallWordHelper
