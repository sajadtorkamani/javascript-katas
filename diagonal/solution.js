const diagonal = matrix => {
  let principal = 0;
  let secondary = 0;

  for (let i = 0; i < matrix.length; i++) {
    principal += matrix[i][i];
    secondary += matrix[i][(matrix.length - 1) - i];
  }

  if (principal === secondary) {
    return 'Draw!'
  }

  return principal > secondary
    ? 'Principal Diagonal win!'
    : 'Secondary Diagonal win!'
};

export default diagonal;