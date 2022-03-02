/**
 * @param {Array<string>} stock
 * @param {Array<string>} categories
 * @return {string}
 */
const stockList = (stock, categories) => {
  if (!stock.length || !categories.length) {
    return ''
  }

  return categories
    .map(categoryCode => {
      const quantity = stock
        .filter(itemCode => itemCode.startsWith(categoryCode))
        .reduce((total, item) => total + +item.match(/\d+/)[0], 0)

      return `(${categoryCode} : ${quantity})`
    })
    .join(' - ')
}

export default stockList
