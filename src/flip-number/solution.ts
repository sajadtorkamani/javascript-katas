const flipNumber = (num: string): string => {
  let digits = num.split('')
  let flippedDigits = []

  while (digits.length) {
    flippedDigits.push(digits.pop())
    flippedDigits.push(digits.shift())
  }

  return flippedDigits.filter(Boolean).join('')
}

export default flipNumber
