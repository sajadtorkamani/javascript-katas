import { lengthOfSequence } from './solution'

describe('lengthOfSequence', () => {
  test('returns correct result', () => {
    expect(lengthOfSequence([1, 2, 3, 1], 1)).toEqual(4)
    expect(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5)).toEqual(5)
    expect(lengthOfSequence([-7, 6, 2, -7, 4], -7)).toEqual(4)
    expect(lengthOfSequence([1, 1], 1)).toEqual(2)

    expect(lengthOfSequence([1, 2, 3, 4, 5], 1)).toEqual(0)
    expect(lengthOfSequence([1, 2, 3, 4, 1, 5, 1], 1)).toEqual(0)
  })
})
