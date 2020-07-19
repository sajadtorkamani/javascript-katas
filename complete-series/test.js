import completeSeries from './solution'

describe('completeSeries', () => {
  test('returns correct result', () => {
    expect(completeSeries([3, 4, 5])).toEqual([0, 1, 2, 3, 4, 5])
    expect(completeSeries([1, 4, 6])).toEqual([0, 1, 2, 3, 4, 5, 6])
    expect(completeSeries([0, 1])).toEqual([0, 1])
    expect(completeSeries([2, 1])).toEqual([0, 1, 2])
    expect(completeSeries([1, 4, 4, 6])).toEqual([0])
  })
})
