import validateSequence from './solution'

describe('validateSequence', () => {
  test('returns correct result', () => {
    expect(validateSequence([2, 4, 6, 8, 10])).toEqual(true)
    expect(validateSequence([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(true)
    expect(validateSequence([1, 2, 3, 4, 5, 8, 7, 8, 9])).toEqual(false)
    expect(validateSequence([0, 2, 4, 6, 8])).toEqual(true)
    expect(validateSequence([1, 3, 5, 7, 9])).toEqual(true)
    expect(validateSequence([1, 2, 4, 8, 16, 32, 64])).toEqual(false)
    expect(validateSequence([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])).toEqual(false)
  })
})
