export const outed = (meeting, boss) => {
  let totalScore = 0;
  const colleaguesCount = Object.keys(meeting).length;

  for (let colleague in meeting) {
    const colleagueScore = meeting[colleague];

    totalScore += colleague === boss
      ? colleagueScore * 2
      : colleagueScore;
  }

  return totalScore / colleaguesCount > 5
    ? 'Nice Work Champ!'
    : 'Get Out Now!';
};