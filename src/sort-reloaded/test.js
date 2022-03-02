import './solution'

describe('Array.prototype.sortReloaded', () => {
  test('returns correct result', () => {
    expect([3, 1, 5, 3, 6, 1, 2].sortReloaded('asc')).toEqual([
      1,
      1,
      2,
      3,
      3,
      5,
      6
    ])
    expect([2, 3, 4, 3, 2, 9, 1].sortReloaded('desc')).toEqual([
      9,
      4,
      3,
      3,
      2,
      2,
      1
    ])
    expect([2, 3].sortReloaded('foo')).toEqual(false)
    expect([4, 7, 2].sortReloaded()).toEqual([2, 4, 7])
  })
})
