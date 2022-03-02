const freqSeq = (str, separator) => {
  const letters = [...str]

  return letters
    .map(letter => letters.filter(v => v === letter).length)
    .join(separator)
}

export default freqSeq
