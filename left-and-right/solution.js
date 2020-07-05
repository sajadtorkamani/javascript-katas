export const left$ = (str, i = 1) => {
  if (typeof i === 'string') {
    const index = str.indexOf(i)
    return str.substr(0, index)
  }

  if (i === 0) {
    return ''
  }

  if (i < 0) {
    const regex = new RegExp(`.{${Math.abs(i)}}$`)
    return str.replace(regex, '')
  }

  return str.substr(0, i)
}

export const right$ = (str, i = 1) => {
  if (typeof i === 'string') {
    const index = str.lastIndexOf(i)
    return str.substr(index + i.length)
  }

  if (i === 0) {
    return ''
  }

  if (i < 0) {
    const regex = new RegExp(`^.{0,${Math.abs(i)}}`)
    return str.replace(regex, '')
  }

  return str.substr(-i)
}
