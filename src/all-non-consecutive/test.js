import allNonConsecutive from './solution'

describe('allNonConsecutive', () => {
  test('returns correct result', () => {
    expect(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10])).toEqual([
      { i: 4, n: 6 },
      { i: 7, n: 10 }
    ])
  })
})

// Return list of all non-consecutive nums and their indices
// - Iterate over each num
//    - Check if it's exactly one greater than the previous num
//      - If not, add the num and index to non-consecutive list
// - Return non-consecutive list
