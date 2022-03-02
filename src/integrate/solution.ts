const integrate = (coefficient: number, exponent: number): string => {
  const a = coefficient / (exponent + 1)
  const b = exponent + 1

  return a + 'x^' + b
}

export default integrate
