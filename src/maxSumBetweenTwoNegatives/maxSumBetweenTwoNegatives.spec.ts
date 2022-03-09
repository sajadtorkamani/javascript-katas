import {
  maxSumBetweenTwoNegatives,
  numsBetweenNegatives
} from './maxSumBetweenTwoNegatives'

describe('maxSumBetweenTwoNegatives', () => {
  test('returns the max sum possible between two negative numbers', () => {
    expect(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -7])).toEqual(8)
    expect(maxSumBetweenTwoNegatives([-9, -6, -5, -9, 7,  7, -4])).toEqual(14)

    expect(maxSumBetweenTwoNegatives([5, -1, -2])).toEqual(0)
    expect(maxSumBetweenTwoNegatives([1, -2])).toEqual(-1)
  })
})

describe('numbersBetweenNegatives', () => {
  test('returns list of numbers that fall between two negative numbers', () => {
    expect(numsBetweenNegatives([-9, -6, -5, -9, 7,  7, -4])).toEqual([[7, 7]])
    expect(numsBetweenNegatives([-1, 6, -2, 3, 5, -7])).toEqual([[6], [3, 5]])
  })

  test.only('returns 0 if there are no numbers between negative numbers', () => {
    expect(numsBetweenNegatives([5, -1, -2])).toEqual([])
  })

  test('returns null if there is not more than 1 negative number', () => {
    expect(numsBetweenNegatives([1, -2])).toEqual(null)
  })
})
