const longestVowelChain = (str: string): number => {
  const vowelChains = str.match(/[aeiou]+/g) || []

  if (vowelChains.length === 0) {
    return 0
  }

  const lengths = vowelChains.map(v => v.length)

  return Math.max(...lengths)
}

export default longestVowelChain
