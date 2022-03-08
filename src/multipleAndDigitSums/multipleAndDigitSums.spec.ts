import { multipleAndDigitSums } from './multipleAndDigitSums'

/**
Create a function that takes an integer, i. With it you must do the following:
- Find all of its multiples up to and including 100,
- Then take the digit sum of each multiple (eg. 45 -> 4 + 5 = 9),
- Get the total sum of each new digit sum.
*/
describe('multipleAndDigitSums', () => {
  test('returns correct result', () => {
    expect(multipleAndDigitSums(30)).toEqual(18)
    expect(multipleAndDigitSums(12)).toEqual(72)
    expect(multipleAndDigitSums(49)).toEqual(30)
    expect(multipleAndDigitSums(17)).toEqual(48)
    expect(multipleAndDigitSums(10)).toEqual(46)
  })
})
