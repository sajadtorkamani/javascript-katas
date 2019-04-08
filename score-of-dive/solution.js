const scoreOfDive = (scores, tariff) => {
  let sortedScores = scores.slice().sort((a, b) => a - b);

  // Remove highest and lowest scores
  sortedScores.splice(0, 2);
  sortedScores.splice(-2);

  const score =  sortedScores.reduce((a, b) => a + b) * tariff;

  return score.toFixed(2);
};

export default scoreOfDive;