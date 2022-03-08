import { isCoprime } from './isCoprime'

describe('isCoprime', () => {
  test('returns true if the numbers are coprime', () => {
    expect(isCoprime(20, 27)).toEqual(true)
  })

  test('returns false if the numbers are not coprime', () => {
    expect(isCoprime(12, 39)).toEqual(false)
  })
})
