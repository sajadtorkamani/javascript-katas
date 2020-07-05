const calculatePayout = (heads, tails, winner) => {
  const payout = winner === 'Tails' ? tails[0] * tails[1] : heads[0] * heads[1]
  const revenue = winner === 'Tails' ? heads[1] : tails[1]
  const totalEarned = revenue - payout
  const prefix = `The outcome is ${winner}, In total I have to pay ${payout.toFixed(
    2
  )}$ to the winner`

  if (totalEarned === 0) {
    return `${prefix}, I broke even!`
  }

  return totalEarned > 0
    ? `${prefix}, I have pocketed ${Math.abs(totalEarned).toFixed(2)}$ !`
    : `${prefix}, of which ${Math.abs(totalEarned).toFixed(
        2
      )}$ from my own pockets :(`
}

export default calculatePayout
