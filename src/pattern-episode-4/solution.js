/**
 * @param {number} n
 * @returns {string}
 */
export const pattern = n => {
  let rows = []
  let sequence = []

  for (let i = 1; i <= n; i++) {
    sequence.push(i)
  }

  for (let i = n; i >= 1; i--) {
    rows.push(sequence.slice(-i).join(''))
  }

  return rows.join('\n')
}
