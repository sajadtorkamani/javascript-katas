/**
 * @param teams {Array<Array>}
 */
const tug_o_war = teams => {
  const [team1, team2] = teams;
  const team1Strength = team1.reduce((a, b) => a + b);
  const team2Strength = team2.reduce((a, b) => a + b);

  switch (true) {
    case team1Strength > team2Strength:
      return 'Team 1 wins!';
    case team2Strength > team1Strength:
      return 'Team 2 wins!';
    default:
      const team1Anchor = team1[0];
      const team2Anchor = team2[team2.length - 1];

      if (team1Anchor === team2Anchor) {
        return 'It\'s a tie!';
      }

      return team1Anchor > team2Anchor ? 'Team 1 wins!' : 'Team 2 wins!';
  }
};

export default tug_o_war;