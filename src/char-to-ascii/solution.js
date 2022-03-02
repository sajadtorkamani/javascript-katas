const charToAscii = str => {
  const hash = {}

  str
    .replace(/[^a-z]/gi, '')
    .split('')
    .forEach(char => {
      if (!hash.hasOwnProperty(char)) {
        hash[char] = char.charCodeAt(0)
      }
    })

  return Object.keys(hash).length ? hash : null
}

export default charToAscii
