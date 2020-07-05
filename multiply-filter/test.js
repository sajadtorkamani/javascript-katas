import { multiplyAndFilter } from './solution'

describe('#multiplyAndFilter', () => {
  test('returns correct result', () => {
    expect(multiplyAndFilter([1, 2, 3, 4], 1.5)).toEqual([1.5, 3, 4.5, 6])
    expect(
      multiplyAndFilter(
        [1, null, function() {}, 2.5, 'foo', 10, undefined, {}, []],
        3
      )
    ).toEqual([3, 7.5, 30])
  })
})
