/**
 * @param radiuses {Array<number>}
 * @returns {number}
 */
const scoreThrows = radiuses => {
  const BONUS = 100

  if (!radiuses.length) {
    return 0
  }

  // Calculate total
  let points = radiuses.reduce((total, radius) => {
    switch (true) {
      case radius > 10:
        return total
      case radius >= 5 && radius <= 10:
        return total + 5
      default:
        return total + 10
    }
  }, 0)

  // Add bonus
  if (radiuses.every(radius => radius < 5)) {
    points += BONUS
  }

  return points
}

export default scoreThrows
