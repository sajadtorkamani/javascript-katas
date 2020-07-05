/**
 * @param arr {Array}
 */
const arrayDeDup = arr => {
  if (!Array.isArray(arr)) {
    return 'Not an array'
  }

  let list = []

  // Filter unique & truthy items
  arr.forEach(item => {
    if (item && !list.includes(item)) {
      list.push(item)
    }
  })

  return list.sort()
}

export default arrayDeDup
