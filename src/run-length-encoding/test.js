import runLengthEncoding from './solution'

describe('runLengthEncoding', () => {
  test('returns correct result', () => {
    expect(runLengthEncoding('')).toEqual([])
    expect(runLengthEncoding('abc')).toEqual([[1, 'a'], [1, 'b'], [1, 'c']])
    expect(runLengthEncoding('aab')).toEqual([[2, 'a'], [1, 'b']])
    expect(runLengthEncoding('hello world!')).toEqual([
      [1, 'h'],
      [1, 'e'],
      [2, 'l'],
      [1, 'o'],
      [1, ' '],
      [1, 'w'],
      [1, 'o'],
      [1, 'r'],
      [1, 'l'],
      [1, 'd'],
      [1, '!']
    ])
    expect(runLengthEncoding('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb')).toEqual([
      [34, 'a'],
      [3, 'b']
    ])
    expect(
      runLengthEncoding(
        'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'
      )
    ).toEqual([
      [12, 'W'],
      [1, 'B'],
      [12, 'W'],
      [3, 'B'],
      [24, 'W'],
      [1, 'B'],
      [14, 'W']
    ])
  })
})
