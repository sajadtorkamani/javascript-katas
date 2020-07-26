const radLadies = (str: string): string => {
  return str.replace(/[^A-Za-z\s!]/g, '').toUpperCase()
}

export default radLadies
