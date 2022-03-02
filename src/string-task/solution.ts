const stringTask = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[aeiouy]/g, '')
    .replace(/\w/g, '.' + '$&')
}

export default stringTask
