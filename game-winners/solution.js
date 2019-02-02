const gameWinners = (gryffindor, slytherin) => {
  const GOLDEN_SNITCH_POINTS = 150;
  const gryffindorScore = gryffindor[0] + (gryffindor[1] === 'yes' ? GOLDEN_SNITCH_POINTS : 0);
  const slytherinScore = slytherin[0] + (slytherin[1] === 'yes' ? GOLDEN_SNITCH_POINTS : 0);

  if (gryffindorScore > slytherinScore) {
    return 'Gryffindor wins!'
  }
  else if (slytherinScore > gryffindorScore) {
    return 'Slytherin wins!'
  }
  else {
    return 'It\'s a draw!'
  }
};

export default gameWinners;
