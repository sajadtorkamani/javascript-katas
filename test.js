import { Matrix, reverseOnDiagonals } from './solution';

describe('Matrix', () => {
  describe('constructor', () => {
    test('sets this.matrix to argument', () => {
      const m = new Matrix('foo');

      expect(m.matrix).toEqual('foo');
    });
  });

  describe('getTopLeftDiagonal', () => {
    test('returns correct diagonal', () => {
      const matrix = new Matrix([
        [43, 455, 32, 103],
        [102, 988, 298, 981],
        [309, 21, 53, 64],
        [2, 22, 35, 291]
      ]);

      expect(matrix.getTopLeftDiagonal()).toEqual([43, 988, 53, 291]);
    });
  });

  describe('getBottomLeftDiagonal', () => {
    test('returns correct diagonal', () => {
      const matrix = new Matrix([
        [43, 455, 32, 103],
        [102, 988, 298, 981],
        [309, 21, 53, 64],
        [2, 22, 35, 291]
      ]);

      expect(matrix.getBottomLeftDiagonal()).toEqual([2, 21, 298, 103]);
    });
  });

  describe('getWithReversedDiagonals', () => {
    test('returns matrix with its diagonals reversed', () => {
      const matrix = new Matrix([
        [43, 455, 32, 103],
        [102, 988, 298, 981],
        [309, 21, 53, 64],
        [2, 22, 35, 291]
      ]);

      const expected = [
        [291, 455, 32, 2],
        [102, 53, 21, 981],
        [309, 298, 988, 64],
        [103, 22, 35, 43]
      ];

      expect(matrix.getWithReversedDiagonals()).toEqual(expected);
    });
  });

  describe('reverseOnDiagonals', () => {
    test('returns matrix with its diagonals reversed', () => {
      const matrix = [
        [43, 455, 32, 103],
        [102, 988, 298, 981],
        [309, 21, 53, 64],
        [2, 22, 35, 291]
      ];

      const expected = [
        [291, 455, 32, 2],
        [102, 53, 21, 981],
        [309, 298, 988, 64],
        [103, 22, 35, 43]
      ];

      expect(reverseOnDiagonals(matrix)).toEqual(expected);
    });
  });
});
