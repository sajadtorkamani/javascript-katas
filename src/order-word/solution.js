const orderWord = str => {
  return typeof str === 'string' && str.length
    ? str
        .split('')
        .sort()
        .join('')
    : 'Invalid String!'
}

export default orderWord
