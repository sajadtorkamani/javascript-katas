const wordPattern = word => {
  const chars = word.toLowerCase().split('')
  const uniqueChars = [...new Set(chars)]

  return chars.map(char => uniqueChars.indexOf(char)).join('.')
}

export default wordPattern
