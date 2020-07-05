/**
 * @param str {string}
 * @returns {string}
 */
const meeting = str => {
  return str
    .toUpperCase()
    .split(';')
    .sort((a, b) => {
      const [aFirstName, aLastName] = a.split(':')
      const [bFirstName, bLastName] = b.split(':')

      return aLastName === bLastName
        ? aFirstName.localeCompare(bFirstName)
        : aLastName.localeCompare(bLastName)
    })
    .map(
      guest =>
        '(' +
        guest
          .split(':')
          .reverse()
          .join(', ') +
        ')'
    )
    .join('')
}

export default meeting
