const encode = (str, keyNum) => {
  const key = keyNum
    .toString()
    .split('')
    .map(Number)
  let keyIndex = 0

  return str.split('').map(letter => {
    const num = letter.charCodeAt(0) - 96
    const encodedNum = num + key[keyIndex]

    keyIndex = keyIndex === key.length - 1 ? 0 : keyIndex + 1

    return encodedNum
  })
}

export default encode
