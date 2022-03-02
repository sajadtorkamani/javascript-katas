String.prototype.toLoverCase = function() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  return this.split('')
    .map(letter => {
      return /\w/.test(letter)
        ? 'LOVE'[alphabet.indexOf(letter.toLowerCase()) % 4]
        : letter
    })
    .join('')
}
