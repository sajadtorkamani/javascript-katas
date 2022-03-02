/**
 * @param a1 {Array<string>}
 * @param a2 {Array<string>}
 */
const inArray = (a1, a2) => {
  return a1.filter(a1Val => a2.some(a2Val => a2Val.includes(a1Val))).sort()
}

export default inArray
