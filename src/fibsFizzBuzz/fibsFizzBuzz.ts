export function fibsFizzBuzz(input: number) {
  return fibonacci(input).map(num => {
    if (num % 5 === 0 && num % 3 === 0) {
      return 'FizzBuzz'
    }

    if (num % 5 === 0) {
      return 'Buzz'
    }

    if (num % 3 === 0) {
      return 'Fizz'
    }

    return num
  })
}

function fibonacci(num: number) {
  const sequence = [1, 1]

  // Validate input
  if (num <= 0) {
    throw new Error(`Invalid input: ${num}. Must be positive integer`)
  }

  if (num === 1) {
    return [sequence[0]]
  }

  for (let sequenceIndex = 2; sequenceIndex < num; sequenceIndex++) {
    const previousNum = sequence[sequenceIndex - 1]
    const precedingNum = sequence[sequenceIndex - 2]
    const newSequenceNum = previousNum + precedingNum

    sequence.push(newSequenceNum)
  }

  return sequence
}
