import { fibsFizzBuzz } from './fibsFizzBuzz'

describe('fibsFizzBuz', () => {
  test.each([
    [1, [1]]
    // [2, [1, 1]],
    // [5, [1, 1, 2, 'Fizz', 'Buzz']],
    // [
    //   20,
    //   [
    //     1,
    //     1,
    //     2,
    //     'Fizz',
    //     'Buzz',
    //     8,
    //     13,
    //     'Fizz',
    //     34,
    //     'Buzz',
    //     89,
    //     'Fizz',
    //     233,
    //     377,
    //     'Buzz',
    //     'Fizz',
    //     1597,
    //     2584,
    //     4181,
    //     'FizzBuzz'
    //   ]
    // ]
  ])('returns correct result for %i', (input, expected) => {
    expect(fibsFizzBuzz(input)).toEqual(expected)
  })
})
