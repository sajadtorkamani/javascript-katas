import charToAscii from './solution'

describe('charToAscii', () => {
  test('handles simple cases, ignoring repeated or non-alphabetic characters', () => {
    expect(charToAscii('hello world 123')).toEqual(
      { h: 104, e: 101, l: 108, o: 111, w: 119, r: 114, d: 100 },
      'deals with spaces'
    )
    expect(charToAscii('a')).toEqual({ a: 97 })
    expect(charToAscii('aaa')).toEqual({ a: 97 })
    expect(charToAscii('ABaa ^')).toEqual(
      { A: 65, B: 66, a: 97 },
      'deals with uppercase characters and non alphebetic characters'
    )
  })

  test('handles edge cases', () => {
    expect(charToAscii('')).toEqual(null)
    expect(charToAscii(';')).toEqual(null)
  })
})
