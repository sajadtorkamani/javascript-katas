import high, { getWordScore } from './solution'

describe('high', () => {
  test(
    'returns the highest scoring word where the score is based on alphabetical position of each letter in ' +
      'the word',
    () => {
      expect(high('man i need a taxi up to ubud')).toEqual('taxi')
      expect(high('what time are we climbing up the volcano')).toEqual(
        'volcano'
      )
      expect(high('take me to semynak')).toEqual('semynak')
    }
  )
})

describe('getWordScore', () => {
  test('returns correct score of word', () => {
    // expect(getWordScore('a')).toEqual(1);
    // expect(getWordScore('d')).toEqual(5);
    expect(getWordScore('abc')).toEqual(6)
    expect(getWordScore('abcd')).toEqual(10)
  })
})
