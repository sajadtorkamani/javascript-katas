import { validateWord } from './solution'

describe('validateWord', () => {
  test('returns correct result', () => {
    expect(validateWord('abcabc')).toEqual(true)
    expect(validateWord('Abcabc')).toEqual(true)
    expect(validateWord('abc123')).toEqual(true)
    expect(validateWord('abcabcd')).toEqual(false)
    expect(validateWord('abc!abc!')).toEqual(true)
    expect(validateWord('abc:abc')).toEqual(false)
  })
})
