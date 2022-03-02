export default function generatePairs(lower, upper) {
  const result = []

  for (let i = lower; i <= upper; i++) {
    for (let j = i; j <= upper; j++) {
      result.push([i, j])
    }
  }

  return result
}
