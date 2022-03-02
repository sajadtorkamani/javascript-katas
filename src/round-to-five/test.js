import roundToFive from './solution'

describe('roundToFive', () => {
  test('returns correct result', () => {
    expect(roundToFive([34.5, 56.2, 11, 13])).toEqual([35, 55, 10, 15])
  })
})
