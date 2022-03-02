import solve from './solution'

describe('solve', () => {
  test('returns correct result', () => {
    expect(solve('abc')).toEqual(true)
    expect(solve('abd')).toEqual(false)
    expect(solve('dabc')).toEqual(true)
    expect(solve('abbc')).toEqual(false)
  })
})
