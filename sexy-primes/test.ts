import sexyPrime, { isPrime } from './solution'

describe('sexyPrime', () => {
  test('returns correct result', () => {
    expect(sexyPrime(5, 11)).toEqual(true)
    expect(sexyPrime(13, 19)).toEqual(true)
    expect(sexyPrime(83, 89)).toEqual(true)
    expect(sexyPrime(1, 11)).toEqual(false)
  })
})

describe('isPrime', () => {
  test('returns true for valid primes', () => {
    ;[2, 3, 5, 7, 11, 13].forEach(num => {
      expect(isPrime(num)).toEqual(true)
    })
  })

  test('returns false for invalid nums', () => {
    ;[6, 10, 15, 16].forEach(num => {
      expect(isPrime(num)).toEqual(false)
    })
  })
})
