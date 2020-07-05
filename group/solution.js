const group = nums => {
  let collection = {}

  nums.forEach(num => {
    collection[num] = collection.hasOwnProperty(num)
      ? collection[num].concat(num)
      : [num]
  })

  return Object.values(collection).sort(
    (a, b) => nums.indexOf(a[0]) - nums.indexOf(b[0])
  )
}

export default group
