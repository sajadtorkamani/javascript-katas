const scramble = (str, positions) => {
  let result = new Array(str.length).fill()

  str.split('').forEach((letter, index) => {
    const position = positions[index]

    result[position] = letter
  })

  return result.join('')
}

export default scramble
