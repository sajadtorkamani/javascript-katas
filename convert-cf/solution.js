const convertCF = (num, scale = 'c') => {
  switch (scale) {
    case 'f':
      return (num * 9) / 5 + 32
    case 'c':
      return ((num - 32) / 9) * 5
    default:
      throw new Error(`Invalid scale: ${scale}`)
  }
}

export default convertCF
