/**
 * @param a1 {number[]}
 * @param a2 {number[]}
 * @return {boolean}
 */
const same = (a1, a2) => {
  if (a1.length !== a2.length) {
    return false
  }

  const normalizeSubArr = arr => arr.sort((a, b) => a - b).join()

  const a1Normalized = a1.map(normalizeSubArr)
  const a2Normalized = a2.map(normalizeSubArr)

  return a1Normalized.every(subArr => a2Normalized.includes(subArr))
}

export default same
