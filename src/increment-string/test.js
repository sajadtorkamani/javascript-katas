import incrementString from './solution'

describe('incrementString', () => {
  test('increments strings correctly', () => {
    expect(incrementString('foobar000')).toEqual('foobar001')
    expect(incrementString('foo')).toEqual('foo1')
    expect(incrementString('foobar001')).toEqual('foobar002')
    expect(incrementString('foobar99')).toEqual('foobar100')
    expect(incrementString('foobar099')).toEqual('foobar100')
    expect(incrementString('foobar009')).toEqual('foobar010')
    expect(incrementString('foobar00999')).toEqual('foobar01000')
    expect(incrementString('foobar9')).toEqual('foobar10')
    expect(incrementString('')).toEqual('1')
  })
})
