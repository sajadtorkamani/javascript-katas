import lowestProduct from './solution'

describe('lowestProduct', () => {
  test('returns correct result', () => {
    expect(lowestProduct('123456789')).toEqual(24)
    expect(lowestProduct('234567899')).toEqual(120)
    expect(lowestProduct('2345611117899')).toEqual(1)
    expect(lowestProduct('333')).toEqual('Number is too small')
    expect(lowestProduct('1234111')).toEqual(4, 'Numbers should be consecutives'); // prettier-ignore
  })
})
