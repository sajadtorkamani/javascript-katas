import { createDict } from './solution'

describe('createDict', () => {
  test('returns correct result', () => {
    expect(createDict(['a', 'b', 'c'], [1, 2, 3])).toEqual({
      a: 1,
      b: 2,
      c: 3
    })
    expect(createDict(['a', 'b', 'c'], [1, 2, 3, 4])).toEqual({
      a: 1,
      b: 2,
      c: 3
    })
    expect(createDict(['a', 'b', 'c', 'd'], [1, 2, 3])).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: null
    })
  })
})
