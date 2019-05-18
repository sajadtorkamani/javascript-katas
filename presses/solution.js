/**
 * @param {string} phrase
 * @return {number}
 */
const presses = phrase => {
  const keypad = [
    '1', 'ABC2', 'DEF3',
    'GHI4', 'JKL5', 'MNO6',
    'PQRS7', 'TUV8', 'WXYZ9',
    '*', ' 0', '#'
  ];

  return phrase
    .toUpperCase()
    .split('')
    .reduce((total, char) => total + keypad.find(key => key.includes(char)).indexOf(char) + 1, 0);
};

export default presses;
