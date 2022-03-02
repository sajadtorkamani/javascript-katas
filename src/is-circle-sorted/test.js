import isCircleSorted from './solution'

describe('isCircleSorted', () => {
  test('returns correct result', () => {
    // expect(isCircleSorted([2, 3, 4, 5, 6])).toEqual(true);
    expect(isCircleSorted([10, 11, 6, 7, 9])).toEqual(true)
    expect(isCircleSorted([6, 2, 3, 4, 5])).toEqual(true)
    expect(isCircleSorted([3, 2, 4, 5, 6])).toEqual(false)
  })
})
