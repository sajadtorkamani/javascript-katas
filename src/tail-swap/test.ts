import tailSwap from './solution'

describe('tailSwap', () => {
  test('returns correct result', () => {
    expect(tailSwap(['abc:123', 'cde:456'])).toEqual(['abc:456', 'cde:123'])
    expect(tailSwap(['a:12345', '777:xyz'])).toEqual(['a:xyz', '777:12345'])
  })
})
