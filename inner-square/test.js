import innerSquare from './solution';

const rectangle = [
  [0, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41]
];

describe.skip('innerSquare', () => {
  test('returns correct result', () => {
    expect(innerSquare(rectangle, 20, 3)).toEqual([
      [13, 14, 15],
      [19, 20, 21],
      [25, 26, 27]
    ]);

    expect(innerSquare(rectangle, 0, 5)).toEqual([
      [0, 1, 2],
      [6, 7, 8], [12, 13, 14]
    ]);
    expect(innerSquare(rectangle, 34, 1)).toEqual([[34]]);
    expect(innerSquare(rectangle, 41, 5)).toEqual([[27, 28, 29], [33, 34, 35], [39, 40, 41]]);
    expect(innerSquare(rectangle, 30, 5)).toEqual([[18, 19, 20], [24, 25, 26], [30, 31, 32], [36, 37, 38]]);
  });
});