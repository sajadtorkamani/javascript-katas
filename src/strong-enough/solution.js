const strongEnough = (earthquake, age) => {
  const magnitude = earthquake
    .map(shockwave => shockwave.reduce((a, b) => a + b))
    .reduce((a, b) => a * b)

  const strength = 1000 * Math.pow(0.99, age)

  return strength >= magnitude ? 'Safe!' : 'Needs Reinforcement!'
}

export default strongEnough
