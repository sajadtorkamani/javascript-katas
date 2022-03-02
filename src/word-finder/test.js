import Dictionary from './solution'

describe('Dictionary', () => {
  describe('#getMatchingWords', () => {
    test('returns correct matching words', () => {
      const fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry'])

      expect(fruits.getMatchingWords('lemon')).toEqual([])
      expect(fruits.getMatchingWords('cherr??')).toEqual([])
      expect(fruits.getMatchingWords('?a?a?a')).toEqual(['banana', 'papaya'])
      expect(fruits.getMatchingWords('??????')).toEqual([
        'banana',
        'papaya',
        'cherry'
      ])
    })
  })
})
