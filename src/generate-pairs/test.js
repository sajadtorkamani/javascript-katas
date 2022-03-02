import generatePairs from './solution'

describe('generatePairs', () => {
  test('returns correct result', () => {
    expect(generatePairs(2, 4)).toEqual([
      [2, 2],
      [2, 3],
      [2, 4],
      [3, 3],
      [3, 4],
      [4, 4]
    ])
  })
})
