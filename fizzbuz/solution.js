const fizzbuzz = n => {
  if (n % 5 === 0 && n % 3 === 0) {
    return 'fizz buzz'
  }

  if (n % 3 === 0) {
    return 'fizz'
  }

  if (n % 5 === 0) {
    return 'buzz'
  }

  return n
}

export default fizzbuzz
