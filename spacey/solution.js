const spacey = arr => {
  return arr.map((_, index) => arr.slice(0, index + 1).join(''))
}

export default spacey
