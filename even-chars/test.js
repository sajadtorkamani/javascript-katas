import evenChars from './solution'

describe('evenChars', () => {
  test('returns correct result', () => {
    expect(evenChars('abcdefghijklm')).toEqual(['b', 'd', 'f', 'h', 'j', 'l'])
  })

  test('handles inputs that are too short or too long', () => {
    expect(evenChars('a')).toEqual('invalid string')
    expect(evenChars('a'.repeat(101))).toEqual('invalid string')
  })
})
