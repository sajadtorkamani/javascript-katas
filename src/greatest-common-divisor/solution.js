/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const mygcd = (a, b) => {
  if (a === 1 || b === 1) {
    return 1
  }

  const smallerNum = Math.min(a, b)
  const largerNum = Math.max(a, b)

  for (let num = smallerNum; num >= 1; num--) {
    if (smallerNum % num === 0 && largerNum % num === 0) {
      return num
    }
  }
}

export default mygcd
