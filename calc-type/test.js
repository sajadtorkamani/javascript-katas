import calcType from './solution'

describe('calcType', () => {
  test('returns correct result', () => {
    expect(calcType(1, 2, 3)).toEqual('addition')
    expect(calcType(10, 4, 40)).toEqual('multiplication')
    expect(calcType(10, 5, 5)).toEqual('subtraction')
    expect(calcType(9, 5, 1.8)).toEqual('division')
  })
})
