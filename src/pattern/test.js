import pattern from './solution'

describe('pattern', () => {
  test('returns correct result', () => {
    expect(pattern(1)).toEqual('1')
    expect(pattern(2)).toEqual('21\n2')
    expect(pattern(5)).toEqual('54321\n5432\n543\n54\n5')
    expect(pattern(0)).toEqual('')
  })
})
