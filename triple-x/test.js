import tripleX from './solution'

describe('tripleX', () => {
  test('returns correct result', () => {
    expect(tripleX('foo')).toEqual(false)
    expect(tripleX('abraxxxas')).toEqual(true)
    expect(tripleX('xoxotrololololololoxxx')).toEqual(false)
    expect(tripleX('soft kitty, warm kitty, xxxxx')).toEqual(true)
    expect(tripleX('softx kitty, warm kitty, xxxxx')).toEqual(false)
  })
})
