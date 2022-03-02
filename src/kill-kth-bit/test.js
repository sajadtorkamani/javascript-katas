import { killKthBit } from './solution'

describe('killKthBit', () => {
  test('returns correct result', () => {
    expect(killKthBit(37, 3)).toEqual(33)
    expect(killKthBit(37, 4)).toEqual(37)
    expect(killKthBit(2147483647, 16)).toEqual(2147450879)
  })
})
