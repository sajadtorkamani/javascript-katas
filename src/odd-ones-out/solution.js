/**
 * @param nums {number[]}
 * @returns {number[]}
 */
const oddOnesOut = nums => {
  return nums.filter(num => {
    const count = nums.filter(v => v === num).length

    return count % 2 === 0
  })
}

export default oddOnesOut
