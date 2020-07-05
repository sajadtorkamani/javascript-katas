import { getNextVowel, getPreviousConsonant } from './solution'
import replaceLetters from './solution'

describe('replaceLetters', () => {
  test('returns correct result', () => {
    expect(replaceLetters('cat')).toEqual('ezu')
    expect(replaceLetters('codewars')).toEqual('enedazuu')
    expect(replaceLetters('abcdtuvwxyz')).toEqual('zeeeutaaaaa')
  })
})

describe('getNextVowel', () => {
  test('returns next vowel in alphabet', () => {
    expect(getNextVowel('g')).toEqual('i')
    expect(getNextVowel('m')).toEqual('o')
    expect(getNextVowel('z')).toEqual('a')
  })
})

describe('getPreviousConsonant', () => {
  test('returns correct result', () => {
    expect(getPreviousConsonant('e')).toEqual('d')
    expect(getPreviousConsonant('o')).toEqual('n')
  })
})
