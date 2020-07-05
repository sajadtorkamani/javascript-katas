export const capitalsFirst = str => {
  const words = str.split(' ')
  const uppercaseWords = words.filter(word => /[A-Z]/.test(word[0]))
  const lowercaseWords = words.filter(word => /[a-z]/.test(word[0]))

  return uppercaseWords.concat(lowercaseWords).join(' ')
}
