// TODO: refactor
const isSolved = board => {
  const boardLength = board.length;

  const isWin = line => /111|222/.test(line);
  const getWinner = line => +line[0];

  // Horizontal win
  for (let rowIndex = 0; rowIndex < boardLength; rowIndex++) {
    const col = board[rowIndex].join('');

    if (isWin(col)) {
      return getWinner(col);
    }
  }

  // Vertical win
  for (let colIndex = 0; colIndex < boardLength; colIndex++) {
    let row = '';

    for (let rowIndex = 0; rowIndex < boardLength; rowIndex++) {
      row += board[rowIndex][colIndex];
    }

    if (isWin(row)) {
      return getWinner(row);
    }
  }

  // Forward diagonal win
  const forwardDiagonal = [board[0][2], board[1][1], board[2][0]].join('');
  if (isWin(forwardDiagonal)) {
    return getWinner(forwardDiagonal);
  }

  // Reverse diagonal win
  const reverseDiagonal = [board[0][0], board[1][1], board[2][2]].join('');
  if (isWin(reverseDiagonal)) {
    return getWinner(reverseDiagonal);
  }

  return board.toString().includes('0') ? -1 : 0;
};

export default isSolved;
