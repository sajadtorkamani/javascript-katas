/**
 * @param {string} str
 * @returns {string}
 */
const alphabetWar = str => {
  str = str.replace(/\w?\*\w?/g, '');
  let leftSidePoints = 0;
  let rightSidePoints = 0;

  str.split('').forEach(letter => {
    // prettier-ignore
    switch (letter) {
      case 'w': leftSidePoints += 4; break;
      case 'p': leftSidePoints += 3; break;
      case 'b': leftSidePoints += 2; break;
      case 's': leftSidePoints += 1; break;

      case 'm': rightSidePoints += 4; break;
      case 'q': rightSidePoints += 3; break;
      case 'd': rightSidePoints += 2; break;
      case 'z': rightSidePoints += 1; break;
    }
  });

  if (rightSidePoints === leftSidePoints) {
    return "Let's fight again!";
  }

  return rightSidePoints > leftSidePoints
    ? 'Right side wins!'
    : 'Left side wins!';
};

export default alphabetWar;
