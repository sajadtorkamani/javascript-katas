import sumConsecutives from './solution'

describe('sumConsecutives', () => {
  test('returns correct result', () => {
    expect(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])).toEqual([
      1,
      12,
      0,
      4,
      6,
      1
    ])
    expect(sumConsecutives([1, 1, 7, 7, 3])).toEqual([2, 14, 3])
    expect(sumConsecutives([-5, -5, 7, 7, 12, 0])).toEqual([-10, 14, 12, 0])
    expect(sumConsecutives([3, 3, 3, 3, 1])).toEqual([12, 1])
  })
})
