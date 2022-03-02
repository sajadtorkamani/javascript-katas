import compoundArray from './solution'

describe('compoundArray', () => {
  test('returns correct result', () => {
    expect(compoundArray([11, 12], [21, 22, 23, 24])).toEqual([
      11,
      21,
      12,
      22,
      23,
      24
    ])
    expect(
      compoundArray(
        [2147483647, 2147483646, 2147483645, 2147483644, 2147483643],
        [9]
      )
    ).toEqual([2147483647, 9, 2147483646, 2147483645, 2147483644, 2147483643])
    expect(compoundArray([214, 215, 216, 217, 218], [])).toEqual([
      214,
      215,
      216,
      217,
      218
    ])
    expect(compoundArray([], [314, 315, 316, 317, 318])).toEqual([
      314,
      315,
      316,
      317,
      318
    ])
  })
})
