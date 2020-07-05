/**
 * @param {number} num
 * @param {number} targetLength
 * @returns {string}
 */
const zeroFill = (num, targetLength) => {
  num = num.toString().replace(/-|\..*/g, '')

  const currentLength = num.length

  if (currentLength > targetLength) {
    return num
  }

  return '0'.repeat(targetLength - currentLength) + num
}

export default zeroFill
