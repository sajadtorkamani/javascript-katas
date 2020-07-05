/**
 * @param {string} name
 * @returns {string}
 */
export const initializeNames = fullName => {
  return fullName
    .split(' ')
    .map((namePart, index, nameParts) => {
      return index === 0 || index === nameParts.length - 1
        ? namePart
        : namePart[0] + '.'
    })
    .join(' ')
}
