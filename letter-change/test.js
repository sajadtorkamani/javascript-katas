import letterChange, { getNextLetter } from './solution'

describe('letterChange', () => {
  test('returns correct result', () => {
    expect(letterChange('Lorem Ipsum')).toEqual('Mpsfn Jqtvn')
    expect(letterChange('JavaScript')).toEqual('KbwbTdsjqu')
  })
})

describe('getNextLetter', () => {
  test('returns next letter in alphabet', () => {
    expect(getNextLetter('a')).toEqual('b')
    expect(getNextLetter('e')).toEqual('f')
    expect(getNextLetter('J')).toEqual('K')
    expect(getNextLetter('z')).toEqual('a')
    expect(getNextLetter('Z')).toEqual('A')
  })

  test('returns space if space given', () => {
    expect(getNextLetter(' ')).toEqual(' ')
  })
})
