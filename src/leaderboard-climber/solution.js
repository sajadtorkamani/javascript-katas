const leaderB = (opponent, opponentScore, userScore) => {
  if (userScore > opponentScore) {
    return 'Winning!'
  }

  if (userScore === opponentScore) {
    return 'Only need one!'
  }

  const POINTS_BETA = 3
  const scoreDiff = opponentScore - userScore

  let numBeta = Number.parseInt(scoreDiff / POINTS_BETA)
  let num8Kyus = Math.round(((scoreDiff / POINTS_BETA) - numBeta) * POINTS_BETA); // prettier-ignore

  if (numBeta + num8Kyus > 1000) {
    return `To beat ${opponent}'s score, I must complete ${numBeta} Beta kata and ${num8Kyus} 8kyu kata. Dammit!`
  } else {
    return `To beat ${opponent}'s score, I must complete ${numBeta} Beta kata and ${num8Kyus} 8kyu kata.`
  }
}

export default leaderB
