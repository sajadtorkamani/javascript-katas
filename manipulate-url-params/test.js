import addOrChangeUrlParameter from './solution'

describe('addOrChangeUrlParameter', () => {
  test('handles adding new param', () => {
    expect(addOrChangeUrlParameter('example.com', 'foo=bar')).toEqual(
      'example.com?foo=bar'
    )
    expect(addOrChangeUrlParameter('example.com?key=value', 'foo=bar')).toEqual(
      'example.com?key=value&foo=bar'
    )
  })

  test('handles changing an existing param', () => {
    expect(addOrChangeUrlParameter('example.com/?foo=bar', 'foo=baz')).toEqual(
      'example.com/?foo=baz'
    )
  })

  test('handles edge cases', () => {
    expect(addOrChangeUrlParameter('http://www.example.com', '')).toEqual(
      'http://www.example.com'
    )
    expect(
      addOrChangeUrlParameter('http://www.example.com?=', 'Age=1234')
    ).toEqual('http://www.example.com?Age=1234')
  })
})
