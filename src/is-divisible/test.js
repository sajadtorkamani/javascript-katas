import isDivisible from './solution'

describe('isDivisible', () => {
  test('returns correct result', () => {
    expect(isDivisible(3, 3, 4)).toEqual(false)
    expect(isDivisible(12, 3, 4)).toEqual(true)
    expect(isDivisible(8, 3, 4, 2, 5)).toEqual(false)
  })
})
