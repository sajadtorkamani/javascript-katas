export const tiyFizzBuzz = str => {
  return str.replace(/\w/g, letter => {
    if (/[BCDFGHJKLMNPQRSTVWQXYZ]/.test(letter)) {
      return 'Iron'
    }
    if (/[AEIOU]/.test(letter)) {
      return 'Iron Yard'
    }
    if (/[aeiou]/.test(letter)) {
      return 'Yard'
    }

    return letter
  })
}
