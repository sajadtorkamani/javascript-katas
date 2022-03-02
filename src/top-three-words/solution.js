const topThreeWords = text => {
  let counts = {}

  const words = text.toLowerCase().match(/\b[\w']+\b/g)

  if (words === null) {
    return []
  }

  words.forEach(word => {
    counts[word] = counts.hasOwnProperty(word) ? counts[word] + 1 : 1
  })

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(item => item[0])
}

export default topThreeWords
