export const alphabetWar = str => {
  let leftSidePoints = 0
  let rightSidePoints = 0

  str.split('').forEach(letter => {
    switch (letter) {
      case 'w':
        leftSidePoints += 4
        break
      case 'p':
        leftSidePoints += 3
        break
      case 'b':
        leftSidePoints += 2
        break
      case 's':
        leftSidePoints += 1
        break

      case 'm':
        rightSidePoints += 4
        break
      case 'q':
        rightSidePoints += 3
        break
      case 'd':
        rightSidePoints += 2
        break
      case 'z':
        rightSidePoints += 1
        break
    }
  })

  if (leftSidePoints === rightSidePoints) {
    return "Let's fight again!"
  }

  return leftSidePoints > rightSidePoints
    ? 'Left side wins!'
    : 'Right side wins!'
}
