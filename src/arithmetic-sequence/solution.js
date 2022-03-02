/**
 * @param {number} first
 * @param {number} diff
 * @param {number} count
 * @return {string}
 */
const arithmeticSequenceElements = (first, diff, count) => {
  let sequence = [first]

  for (let position = 1; position <= count - 1; position++) {
    const num = first + position * diff
    sequence.push(num)
  }

  return sequence.join(', ')
}

export default arithmeticSequenceElements
