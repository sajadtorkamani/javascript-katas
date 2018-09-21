/**
 * The constructor.
 *
 * @param matrix {array}
 * @constructor
 */
export function Matrix(matrix) {
  this.matrix = matrix;
}

/**
 * Get the diagonal from the top left to the bottom right.
 *
 * @returns {array}
 */
Matrix.prototype.getTopLeftDiagonal = function () {
  let diagonal = [];

  for (let i = 0; i < this.matrix.length; i++) {
    diagonal.push(this.matrix[i][i]);
  }

  return diagonal;
};

/**
 * Get the diagonal from the bottom left to the top right.
 *
 * @returns {array}
 */
Matrix.prototype.getBottomLeftDiagonal = function () {
  let diagonal = [];

  for (let row = this.matrix.length - 1, column = 0; row >= 0; row--, column++) {
    diagonal.push(this.matrix[row][column]);
  }

  return diagonal;
};

/**
 * Return matrix with the diagonals reversed.
 *
 * @returns {array}
 */
Matrix.prototype.getWithReversedDiagonals = function () {
  let reversedMatrix = this.matrix.slice();
  let topLeftDiagonal = this.getTopLeftDiagonal();
  let bottomLeftDiagonal = this.getBottomLeftDiagonal();

  // Reverse top left to bottom right diagonal.
  for (let i = 0; i < this.matrix.length; i++) {
    reversedMatrix[i][i] = topLeftDiagonal.pop();
  }

  // Reverse bottom left to top right diagonal.
  for (let row = this.matrix.length - 1, column = 0; row >= 0; row--, column++) {
    reversedMatrix[row][column] = bottomLeftDiagonal.pop();
  }

  return reversedMatrix;
};

export const reverseOnDiagonals = matrix => {
  return new Matrix(matrix).getWithReversedDiagonals();
};
