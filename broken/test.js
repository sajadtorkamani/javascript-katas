import broken from './solution'

describe('broken', () => {
  test('returns correct result', () => {
    // expect(broken('1')).toEqual('0');
    // expect(broken('10000000101101111110011001000')).toEqual('01111111010010000001100110111');
    expect(broken('100010')).toEqual('011101')
  })
})
