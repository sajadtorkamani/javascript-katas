/**
 * @param {string} str
 * @returns {string}
 */
const reverse = str => {
  return str
    .trim()
    .split(' ')
    .map((word, index) => {
      return index % 2 === 1
        ? word.split('').reverse().join('') // prettier-ignore
        : word
    })
    .join(' ')
}

export default reverse
