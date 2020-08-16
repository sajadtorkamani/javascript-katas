const evenChars = str => {
  return str.length < 2 || str.length > 100
    ? 'invalid string'
    : str.split('').filter((_, index) => (index + 1) % 2 === 0)
}

export default evenChars
