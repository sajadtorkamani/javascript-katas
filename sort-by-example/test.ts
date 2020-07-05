import exampleSort from './solution'

describe('sortByExample', () => {
  test('returns correct result', () => {
    expect(exampleSort<number>([1, 2, 3, 4, 5], [2, 3, 4, 1, 5])).toEqual([
      2,
      3,
      4,
      1,
      5
    ])
    expect(exampleSort<number>([1, 2, 3, 3, 3, 4, 5], [2, 3, 4, 1, 5])).toEqual(
      [2, 3, 3, 3, 4, 1, 5]
    )
    expect(exampleSort<number>([1, 2, 3, 3, 3, 5], [2, 3, 4, 1, 5])).toEqual([
      2,
      3,
      3,
      3,
      1,
      5
    ])
    expect(
      exampleSort<number>(
        [1, 2, 3, 3, 3, 5],
        [3, 4, 5, 6, 9, 11, 12, 13, 1, 7, 8, 2, 10]
      )
    ).toEqual([3, 3, 3, 5, 1, 2])
  })
})
