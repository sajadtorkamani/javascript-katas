/**
 * @param {string} binary
 * @returns {string}
 */
const binaryToString = binary => {
  if (binary.length === 0) {
    return ''
  }

  return binary
    .match(/\d{8}/g)
    .map(byte => {
      const charCode = parseInt(byte, 2)

      return String.fromCharCode(charCode)
    })
    .join('')
}

export default binaryToString
