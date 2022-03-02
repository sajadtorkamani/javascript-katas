import validateEAN from './solution'

describe('validateEAN', () => {
  test('returns correct result', () => {
    expect(validateEAN('9783815820865')).toEqual(true)
    expect(validateEAN('9783815820864')).toEqual(false)
    expect(validateEAN('9783827317100')).toEqual(true)
  })
})
