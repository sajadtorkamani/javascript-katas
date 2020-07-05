const split = (objects, prop) => {
  const truthies = objects.filter(obj => obj[prop])
  const falsies = objects.filter(obj => !obj[prop])

  return [truthies, falsies]
}

export default split
