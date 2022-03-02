import factorial from './solution'

describe('factorial', () => {
  test('returns correct result', () => {
    expect(factorial(4)).toEqual(24)
    expect(factorial(7)).toEqual(5040)
    expect(factorial(17)).toEqual(355687428096000)
    expect(factorial(0)).toEqual(1)
    expect(factorial(1)).toEqual(1)
  })
})
