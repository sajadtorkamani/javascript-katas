/**
 * @param namesStr {string}
 * @param weights {number[]}
 * @param targetRank {number}
 * @returns {string}
 */
const rank = (namesStr, weights, targetRank) => {
  if (namesStr === '') {
    return 'No participants'
  }

  const names = namesStr.split(',')

  if (targetRank > names.length) {
    return 'Not enough participants'
  }

  return names
    .map((name, index) => [name, calculateSom(name) * weights[index]])
    .sort((a, b) => {
      return a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]
    })[targetRank - 1][0]
}

/**
 * @param name {string}
 * @return {number}
 */
export const calculateSom = name => {
  return (
    name
      .toLowerCase()
      .split('')
      .reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0) + name.length
  )
}

export default rank
