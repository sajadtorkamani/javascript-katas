/**
 * @param parts {Array<string>}
 */
const makeSentence = parts => {
  return (
    parts
      .filter(p => p !== '.')
      .join(' ')
      .replace(/ ,/g, ',') + '.'
  )
}

export default makeSentence
