import firstNonRepeatingLetter from './solution'

describe('firstNonRepeatingLetter', () => {
  test('returns the first letter that is not repeated in the string', () => {
    expect(firstNonRepeatingLetter('stress')).toEqual('t')
    expect(firstNonRepeatingLetter('sTreSS')).toEqual('T')
    expect(firstNonRepeatingLetter('moonmen')).toEqual('e')
    expect(firstNonRepeatingLetter('ffoo')).toEqual('')
  })
})
