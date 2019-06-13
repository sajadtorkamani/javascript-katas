import matrixAddition from './solution';

describe('matrixAddition', () => {
  test('returns correct result', () => {
    // prettier-ignore
    expect(
      matrixAddition(
        [ [1, 2], 
          [1, 2] ],
        [ [2, 3], 
          [2, 3] ]
      ))
      .toEqual(
        [ [3, 5], 
          [3, 5] ]
      );
  });
});
