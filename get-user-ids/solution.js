/**
 * @param str {string}
 * @returns {string[]}
 */
const getUsersIds = str => {
  return str
    .toLowerCase()
    .split(', ')
    .map(item => {
      return item
        .trim()
        .replace(/#/g, '')
        .replace(/^uid\s*/, '')
    })
}

export default getUsersIds
