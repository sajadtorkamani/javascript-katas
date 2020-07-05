/**
 * @param {number} num
 * @return {number}
 */
const palindromeChainLength = num => {
  if (isPalindrome(num)) {
    return 0
  }

  let numSteps = 0
  let sum = num

  while (true) {
    sum = sum + getReversedNum(sum)
    numSteps += 1

    if (isPalindrome(sum)) {
      return numSteps
    }
  }
}

/**
 * @param {number} num
 * @return {boolean}
 */
export const isPalindrome = num => {
  return getReversedNum(num) === num
}

/**
 * @param {number} num
 * @return {number}
 */
export const getReversedNum = num => {
  return +num
    .toString()
    .split('')
    .reverse()
    .join('')
}

export default palindromeChainLength
