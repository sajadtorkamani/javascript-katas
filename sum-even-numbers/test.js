import sumEvenNumbers from './solution'

describe('sumEvenNumbers', () => {
  test('returns correct result', () => {
    expect(sumEvenNumbers([4, 5, 6, 7])).toEqual(10)
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(30)
  })
})
