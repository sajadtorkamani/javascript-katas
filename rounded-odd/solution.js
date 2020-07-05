const roundedOdd = x => {
  if (isNaN(x) || typeof x === 'boolean') {
    return false
  }

  x = Math.abs(x)
  x = Math.floor(x)

  return x % 2 === 1
}

export default roundedOdd
