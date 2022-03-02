import orderWord from './solution'

describe('orderWord', () => {
  test('returns correct result', () => {
    expect(orderWord('Hello, World!')).toEqual(' !,HWdellloor')
    expect(orderWord('bobby')).toEqual('bbboy')
    expect(orderWord('b')).toEqual('b')
    expect(orderWord('')).toEqual('Invalid String!')
    expect(orderWord('completesolution')).toEqual('ceeillmnooopsttu')
    expect(orderWord('"][@!$*(^&%')).toEqual('!"$%&(*@[]^')
    expect(orderWord('i"d][@z!$r(^a&world%')).toEqual('!"$%&(@[]^addilorrwz')
    expect(orderWord(null)).toEqual('Invalid String!')
    expect(orderWord('cba')).toEqual('abc')
    expect(orderWord('abc')).toEqual('abc')
  })
})
