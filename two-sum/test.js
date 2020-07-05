import twoSum from './solution'

describe('twoSum', () => {
  test('returns the indices of the two elements that when added together give `target`', () => {
    expect(twoSum([1, 2, 3], 4)).toEqual([0, 2])
    expect(twoSum([1234, 5678, 9012], 14690)).toEqual([1, 2])
    expect(twoSum([2, 2, 3], 4)).toEqual([0, 1])
  })
})
