import { consecutiveOnes } from './consecutiveOnes'

describe('consecutiveOnes', () => {
  test('returns correct result', () => {
    expect(consecutiveOnes([0, 0, 0, 1, 0, 0, 1, 1])).toEqual([1, 2])
    expect(consecutiveOnes([1, 1, 1, 1, 1])).toEqual([5])
    expect(consecutiveOnes([1, 1, 1, 0, 0, 1, 0, 1, 1, 0])).toEqual([3, 1, 2])
    expect(consecutiveOnes([1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1])).toEqual([
      1,
      2,
      4,
      1
    ])
    expect(consecutiveOnes([0, 0, 0, 0, 0, 0, 0, 0])).toEqual([])
  })
})
