export const compressSentence = (sentence: string): string => {
  const wordsList: string[] = []
  const words = sentence.split(' ').map(word => word.toLowerCase())

  words.forEach(word => {
    if (!wordsList.includes(word)) {
      wordsList.push(word)
    }
  })

  return words.map(word => wordsList.indexOf(word)).join('')
}
