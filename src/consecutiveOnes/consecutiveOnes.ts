export const consecutiveOnes = (nums: number[]): number[] => {
  const consecutiveMatches = nums.join('').match(/(1)(\1+)?/g) || []
  return consecutiveMatches.map(m => m.length)
}
