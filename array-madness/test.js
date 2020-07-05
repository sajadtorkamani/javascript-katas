import { arrayMadness } from './solution'

describe('arrayMadness', () => {
  test('returns correct result', () => {
    expect(arrayMadness([4, 5, 6], [1, 2, 3])).toBe(true)
  })
})
