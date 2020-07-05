const broken = str => {
  return str.replace(/[01]/g, m => {
    switch (m) {
      case '0':
        return '1'
      case '1':
        return '0'
      default:
        break
    }
  })
}

export default broken
