/**
 * @param {Array<Object>} devs
 * @return {Array<Object>}
 */
const findOddNames = devs => devs.filter(dev => hasOddSum(dev.firstName))

/**
 * @param str {string}
 * @return {boolean}
 */
export const hasOddSum = str => {
  return (
    str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 2 === 1
  )
}

export default findOddNames
