/**
 * @param num {number}
 */
const expandedForm = num => {
  return num
    .toString()
    .split('')
    .map((val, index, nums) => {
      if (val === '0') {
        return
      }

      const position = index + 1
      const numZeros = Math.abs(position - nums.length)

      return val + '0'.repeat(numZeros)
    })
    .filter(Boolean)
    .join(' + ')
}

export default expandedForm
