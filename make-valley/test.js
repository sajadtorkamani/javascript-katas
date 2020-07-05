import { makeValley } from './solution'

describe('makeValley', () => {
  test('returns correct result', () => {
    // prettier-ignore
    expect(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]))
      .toEqual([ 17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17 ]);

    // prettier-ignore
    expect(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]))
      .toEqual([ 20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18 ]);

    expect(makeValley([20, 7, 6, 2])).toEqual([20, 6, 2, 7])
    expect(makeValley([14, 10, 8])).toEqual([14, 8, 10])
  })
})
