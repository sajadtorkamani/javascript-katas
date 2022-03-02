/**
 * @param {number} num
 * @return {boolean}
 */
const validate = num => {
  return (
    num
      .toString()
      .split('')
      .reverse()
      .map((digit, index) => (index % 2 === 1 ? +digit * 2 : +digit))
      .map(digit => (digit > 9 ? digit - 9 : digit))
      .reduce((sum, digit) => sum + digit) %
      10 ===
    0
  )
}

export default validate
