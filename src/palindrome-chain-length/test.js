import palindromeChainLength, {
  getReversed,
  getReversedNum,
  isPalindrome
} from './solution'

describe('palindromeChainLength', () => {
  test('returns correct result', () => {
    expect(palindromeChainLength(87)).toEqual(4)
    expect(palindromeChainLength(101)).toEqual(0)
  })
})

describe('isPalindrome', () => {
  test('returns true if input is a palindrome', () => {
    expect(isPalindrome(1221)).toEqual(true)

    expect(isPalindrome(1223)).toEqual(false)
  })
})

describe('getReversedNum', () => {
  test('returns reversed equivalent of num', () => {
    expect(getReversedNum(1234)).toEqual(4321)
  })
})
