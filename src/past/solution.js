const past = (hours, mins, secs) => {
  let milliseconds = 0

  milliseconds += secs * 1000
  milliseconds += mins * 60000
  milliseconds += hours * 3600000

  return milliseconds
}

export default past
