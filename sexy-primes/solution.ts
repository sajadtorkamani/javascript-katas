const sexyPrime = (a: number, b: number): boolean => {
  return isPrime(a) && isPrime(b) && Math.abs(a - b) === 6
}

export const isPrime = (num: number): boolean => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }

  return num > 1
}

export default sexyPrime
