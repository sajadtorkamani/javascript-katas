/**
 * @param {string} code
 * @return {boolean}
 */
const validateEAN = code => {
  const sum = code
    .split('')
    .slice(0, -1)
    .reduce(
      (sum, digit, index) => sum + +(index % 2 === 0 ? digit : digit * 3),
      0
    )

  const checksum = sum % 10 === 0 ? 0 : 10 - (sum % 10)

  return code.slice(-1) == checksum
}

export default validateEAN
