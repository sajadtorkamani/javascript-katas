/**
 * @param {string} name
 * @return {string}
 */
const initials = name => {
  return name
    .split(' ')
    .map((part, index, parts) => {
      return index === parts.length - 1
        ? part[0].toUpperCase() + part.substr(1).toLowerCase()
        : part[0].toUpperCase()
    })
    .join('.')
}

export default initials
