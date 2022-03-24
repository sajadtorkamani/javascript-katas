import { kaprekarSplit } from './kaprekarSplit'

describe('kaprekarSplit', () => {
  test('returns correct result', () => {
    expect(kaprekarSplit(45)).toEqual(2)
    expect(kaprekarSplit(2223)).toEqual(3)
    expect(kaprekarSplit(5050)).toEqual(4)
    expect(kaprekarSplit(5051)).toEqual(-1)
    expect(kaprekarSplit(9)).toEqual(1)
    expect(kaprekarSplit(1)).toEqual(0)
  })
})
