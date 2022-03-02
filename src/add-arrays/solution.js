/**
 * @param arrays
 * @return {Array<number>}
 */
const addArrays = (...arrays) => {
  if (arrays.every(arr => arr.length === 0)) {
    return []
  }

  return arrays
    .reduce((sum, arr) => sum + +arr.join(''), 0)
    .toString()
    .match(/-?\d/g)
    .map(Number)
}

export default addArrays
