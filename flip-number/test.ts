import flipNumber from './solution'

describe('flipNumber', () => {
  test('returns correct result', () => {
    expect(flipNumber('012345')).toEqual('504132')
    expect(flipNumber('0123456789')).toEqual('9081726354')
    expect(flipNumber('012')).toEqual('201')

    // 2 0 1
    // 5 0 4 1 3 2
    // 9 0 8 1 7 2 6 3 5 4
  })
})
