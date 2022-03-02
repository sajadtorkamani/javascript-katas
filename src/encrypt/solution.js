/**
 * @param text {string}
 * @param rule {number}
 */
const encrypt = (text, rule) => {
  return text.replace(/./g, char => {
    const charCode = char.charCodeAt(0) + rule

    return charCode > 255
      ? String.fromCharCode(charCode % 256)
      : String.fromCharCode(charCode)
  })
}

export default encrypt
