import arraysSimilar from './solution'

describe('arraysSimilar', () => {
  test('returns correct result', () => {
    const arr1 = [1, 2, 2, 3, 4],
      arr2 = [2, 1, 2, 4, 3],
      arr3 = [1, 2, 3, 4],
      arr4 = [1, 2, 3, '4']

    expect(arraysSimilar(arr1, arr2)).toEqual(true) // Should equal true
    expect(arraysSimilar(arr2, arr3)).toEqual(false) // Should equal false
    expect(arraysSimilar(arr3, arr4)).toEqual(false) // Should equal false
  })
})
