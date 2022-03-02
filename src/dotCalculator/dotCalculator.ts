export const dotCalculator = (equation: string) => {
  const parts = equation.split(' ')
  const num1 = parts[0].length
  const num2 = parts[2].length
  const operator = parts[1]

  switch (operator) {
    case '+':
      return '.'.repeat(num1 + num2)
    case '-':
      return '.'.repeat(num1 - num2)
    case '*':
      return '.'.repeat(num1 * num2)
    case '//':
      return '.'.repeat(num1 / num2)
    default:
      return ''
  }
}
