import arithmeticSequenceElements from './solution'

describe('arithmeticSequenceElements', () => {
  test('returns correct result', () => {
    expect(arithmeticSequenceElements(1, 2, 5)).toEqual('1, 3, 5, 7, 9')
    expect(arithmeticSequenceElements(1, 0, 5)).toEqual('1, 1, 1, 1, 1')
    expect(arithmeticSequenceElements(1, -3, 10)).toEqual(
      '1, -2, -5, -8, -11, -14, -17, -20, -23, -26'
    )
    expect(arithmeticSequenceElements(100, -10, 10)).toEqual(
      '100, 90, 80, 70, 60, 50, 40, 30, 20, 10'
    )
  })
})
