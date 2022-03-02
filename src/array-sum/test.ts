import arraySum from './solution'

describe('arraySum', () => {
  test('returns correct result', () => {
    expect(arraySum([1, 2])).toEqual(3)
    expect(arraySum([1, 2, 3])).toEqual(6)
    expect(arraySum([1, 2, [1, 2]])).toEqual(6)
  })
})
