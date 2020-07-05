import zeroFill from './solution'

describe('zeroFill', () => {
  test('returns correct result', () => {
    expect(zeroFill(11, 5)).toEqual('00011')
    expect(zeroFill(11, 11)).toEqual('00000000011')
    expect(zeroFill(0, 3)).toEqual('000')

    expect(zeroFill(-32, 5)).toEqual('00032')
    expect(zeroFill(211, 2)).toEqual('211')
    expect(zeroFill(25.666666666666668, 9)).toEqual('000000025')
  })
})
