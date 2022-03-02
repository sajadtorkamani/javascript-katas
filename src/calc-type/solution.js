const calcType = (a, b, result) => {
  if (a + b === result) {
    return 'addition'
  }
  if (a * b === result) {
    return 'multiplication'
  }
  if (a - b === result) {
    return 'subtraction'
  }
  if (a / b === result) {
    return 'division'
  }
}

export default calcType
