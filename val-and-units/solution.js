// TODO: could be simpler
const valAndUnits = str => {
  const units = (str.match(/[^0-9]+$/i) || [])[0] || ''
  const val = +str.replace(units, '')

  return { val, units: units.trim() }
}

export default valAndUnits
