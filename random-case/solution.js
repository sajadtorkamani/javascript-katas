const randomCase = str => {
  return str
    .split('')
    .map(char =>
      Math.random() >= 0.5 ? char.toUpperCase() : char.toLowerCase()
    )
    .join('')
}

export default randomCase
