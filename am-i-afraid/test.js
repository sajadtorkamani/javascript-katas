import AmIAfraid from './solution'

describe('AmIAfraid', () => {
  test('returns correct result', () => {
    expect(AmIAfraid('Monday', 13)).toEqual(false)
    expect(AmIAfraid('Sunday', -666)).toEqual(true)
    expect(AmIAfraid('Tuesday', 2)).toEqual(false)
    expect(AmIAfraid('Tuesday', 965)).toEqual(true)
    expect(AmIAfraid('Friday', 2)).toEqual(true)
  })
})
