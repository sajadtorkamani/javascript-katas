/**
 * @param {string} str
 * @returns {number}
 */
const lowestProduct = str => {
  if (str.length < 4) {
    return 'Number is too small'
  }

  const fourDigitsRegex = /\d(?=(\d{3}))/g
  let fourDigitsList = []
  let match

  while ((match = fourDigitsRegex.exec(str))) {
    fourDigitsList.push(match[0] + match[1])
  }

  const products = fourDigitsList.map(fourDigits => {
    return fourDigits.split('').reduce((acc, val) => acc * Number(val), 1)
  })

  return Math.min(...products)
}

export default lowestProduct
