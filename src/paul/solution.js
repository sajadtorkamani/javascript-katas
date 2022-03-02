const paul = activities => {
  const activityScores = {
    kata: 5,
    'Petes kata': 10,
    eating: 1,
    life: 0
  }

  const score = activities
    .map(activity => activityScores[activity])
    .reduce((a, b) => a + b, 0)

  if (score >= 100) {
    return 'Miserable!'
  }
  if (score >= 70) {
    return 'Sad!'
  }
  if (score >= 40) {
    return 'Happy!'
  }
  return 'Super happy!'
}

export default paul
