export function consecutiveOnes(nums: number[]): number {
  const consecutiveMatches = nums.join('').match(/(1)(\1+)?/g)

  if (consecutiveMatches === null) {
    return 0
  }

  return consecutiveMatches.map(match => match.length).sort((a, b) => b - a)[0]
}
