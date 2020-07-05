/**
 * @param throws {Array}
 */
const score = throws => {
  let total = 0

  const numberScores = {
    1: { triplet: 1000, single: 100 },
    2: { triplet: 200, single: 0 },
    3: { triplet: 300, single: 0 },
    4: { triplet: 400, single: 0 },
    5: { triplet: 500, single: 50 },
    6: { triplet: 600, single: 0 }
  }

  for (let number in numberScores) {
    const count = throws.filter(v => v == number).length

    if (count) {
      switch (true) {
        case count > 3:
          const singlesCount = count % 3
          total +=
            numberScores[number].triplet +
            numberScores[number].single * singlesCount
          break
        case count === 3:
          total += numberScores[number].triplet
          break
        default:
          total += numberScores[number].single * count
          break
      }
    }
  }

  return total
}

export default score
