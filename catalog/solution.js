/**
 * @param xmlString {string}
 * @param product {string}
 * @returns {string}
 */
const catalog = (xmlString, product) => {
  const formatProduct = line => {
    const name = line.match(/(?<=<name>).+(?=<\/name>)/)
    const price = line.match(/(?<=<prx>)[0-9.]+(?=<\/prx>)/)
    const quantity = line.match(/(?<=<qty>)\d+(?=<\/qty>)/)

    return `${name} > prx: $${price} qty: ${quantity}`
  }

  return (
    xmlString
      .split('\n')
      .filter(line => line.includes(product))
      .map(formatProduct)
      .join('\r\n') || 'Nothing'
  )
}

export default catalog
