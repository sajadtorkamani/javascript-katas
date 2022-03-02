export const multiplyAndFilter = (arr, multiplier) => {
  return arr.filter(v => typeof v === 'number').map(v => v * multiplier)
}
