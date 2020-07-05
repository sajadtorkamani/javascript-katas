import tea42 from './solution'

describe('tea42', () => {
  test('returns correct result', () => {
    expect(tea42(2)).toEqual('t')
    expect(tea42('2')).toEqual('t')
    expect(tea42(102)).toEqual('10t')
    expect(tea42('m2')).toEqual('mt')
    expect(tea42('pre2ty')).toEqual('pretty')
  })
})
