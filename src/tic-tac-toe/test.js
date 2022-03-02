import isSolved from './solution'

describe('isSolved', () => {
  test('detects horizontal win', () => {
    // prettier-ignore
    const board = [
      ['2', '2', '1'],
      ['1', '1', '1'],
      ['1', '2', '2']
    ];

    expect(isSolved(board)).toEqual(1)
  })

  test('detects vertical win', () => {
    // prettier-ignore
    const board = [
      ['2', '2', '1'],
      ['1', '2', '2'],
      ['1', '2', '1']
    ];

    expect(isSolved(board)).toEqual(2)
  })

  test('detects forward diagonal win', () => {
    // prettier-ignore
    const board = [
      ['2', '2', '1'],
      ['2', '1', '2'],
      ['1', '1', '2']
    ];

    expect(isSolved(board)).toEqual(1)
  })

  test('detects reverse diagonal win', () => {
    // prettier-ignore
    const board = [
      ['2', '2', '1'],
      ['2', '2', '1'],
      ['1', '1', '2']
    ];

    expect(isSolved(board)).toEqual(2)
  })

  test("returns -1 if it's not finished", () => {
    // prettier-ignore
    const board = [
    ['2', '1', '1'],
    ['1', '2', '0'],
    ['0', '1', '0']
  ];

    expect(isSolved(board)).toEqual(-1)
  })
  test("returns 0 if it's a draw", () => {
    // prettier-ignore
    const board = [
    ['2', '1', '1'],
    ['1', '2', '2'],
    ['2', '1', '1']
  ];

    expect(isSolved(board)).toEqual(0)
  })
})
