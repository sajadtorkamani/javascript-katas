import same from './solution'

describe('same', () => {
  describe('Simple 2x2 arrays', function() {
    test('same arrays', function() {
      expect(same([[2, 5], [3, 6]], [[5, 2], [3, 6]])).toEqual(true)
      expect(same([[2, 5], [3, 6]], [[6, 3], [5, 2]])).toEqual(true)
      expect(same([[2, 5], [3, 6]], [[6, 3], [2, 5]])).toEqual(true)
    })
  })

  describe('Simple 3x3 arrays', function() {
    test('same arrays', function() {
      expect(same([[2, 5], [3, 5], [6, 2]], [[2, 6], [5, 3], [2, 5]])).toEqual(
        true
      )
      expect(same([[2, 5], [3, 5], [6, 2]], [[3, 5], [6, 2], [5, 2]])).toEqual(
        true
      )
    })
  })

  describe('Empty arrays', function() {
    test('same arrays', function() {
      expect(same([], [])).toEqual(true)
    })
  })

  describe.only('Unequal arrays', function() {
    test('not same arrays', function() {
      expect(same([[2, 3], [3, 4]], [[4, 3], [2, 4]])).toEqual(false)
      expect(same([[2, 3], [3, 2]], [[2, 3]])).toEqual(false)
    })
  })
})
