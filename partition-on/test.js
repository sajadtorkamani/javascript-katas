import partitionOn from './solution'

describe('partitionOn', () => {
  test('returns correct result', () => {
    const items = [1, 2, 3, 4, 5, 6]
    const isEven = n => n % 2 == 0
    const i = partitionOn(isEven, items)

    expect(i).toEqual(3)
    expect(items).toEqual([1, 3, 5, 2, 4, 6])
  })
})
