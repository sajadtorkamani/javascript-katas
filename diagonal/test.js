import diagonal from './solution'

describe('diagonal', () => {
  test('returns correct result', () => {
    expect(diagonal([[2, 2, 2], [4, 2, 6], [1, 8, 2]])).toEqual(
      'Principal Diagonal win!'
    )
  })

  expect(
    diagonal([
      [1, 2, 2, 5, 1],
      [4, 1, 6, 1, 1],
      [1, 8, 5, 6, 2],
      [1, 5, 2, 1, 2],
      [1, 8, 2, 6, 1]
    ])
  ).toEqual('Secondary Diagonal win!')

  expect(
    diagonal([
      [1, 2, 2, 5, 1, 1, 2, 2, 5, 1],
      [4, 1, 6, 1, 1, 1, 2, 2, 1, 1],
      [1, 8, 1, 6, 2, 1, 2, 1, 5, 1],
      [1, 5, 2, 1, 2, 1, 1, 2, 5, 1],
      [1, 8, 2, 6, 1, 1, 2, 2, 5, 1],
      [1, 2, 2, 5, 1, 1, 2, 2, 5, 1],
      [1, 2, 2, 1, 1, 1, 1, 2, 5, 1],
      [1, 2, 1, 5, 1, 1, 2, 1, 5, 1],
      [1, 1, 2, 5, 1, 1, 2, 2, 1, 1],
      [1, 2, 2, 5, 1, 1, 2, 2, 5, 1]
    ])
  ).toEqual('Draw!')
})
