const battleOutcome = (attacker, defender) => {
  const numBattles = Math.min(attacker.length, defender.length);

  const [attackerScores, defenderScores] = [attacker, defender].map(scores => {
    return scores
      .slice()
      .sort((a, b) => b - a)
      .slice(0, numBattles);
  });

  const numAttackerWins = attackerScores
    .filter((attackerScore, index) => attackerScore > defenderScores[index])
    .length;

  const numDefenderWins = numBattles - numAttackerWins;

  return [numDefenderWins, numAttackerWins];
};

export default battleOutcome;