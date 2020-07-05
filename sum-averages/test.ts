import sumAverage from './solution'

describe('sumAverage', () => {
  test('returns correct result', () => {
    expect(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]])).toEqual(
      44
    )

    expect(
      sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]])
    ).toEqual(-6)
  })
})

/**
 * Map over each item
 *    Return average
 * Reduce the sum of averages and return value
 */
