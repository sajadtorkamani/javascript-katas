/**
 * @param addressesStr {string}
 * @param zipCode {string}
 * @returns {string}
 */
const travel = (addressesStr, zipCode) => {
  if (zipCode === '') {
    return ':/'
  }

  let streetNames = []
  let houseNumbers = []

  const addresses = addressesStr
    .split(',')
    .filter(addr => addr.endsWith(zipCode))
    .map(addr => addr.replace(' ' + zipCode, ''))

  addresses.forEach(addr => {
    let addrParts = addr.split(' ')

    const houseNumber = addrParts.shift()
    const streetName = addrParts.join(' ')

    streetNames.push(streetName)
    houseNumbers.push(houseNumber)
  })

  return `${zipCode}:${streetNames.join(',')}/${houseNumbers.join(',')}`
}

export default travel
