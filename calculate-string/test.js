import CalculateString from './solution'

describe('CalculateString', () => {
  test('returns correct result', () => {
    expect(CalculateString(4, '1100')).toEqual(0)
    expect(CalculateString(5, '01010')).toEqual(1)
  })
})
