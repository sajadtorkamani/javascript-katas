/**
 * @param {Array<Object>} list
 * @return {boolean}
 */
const allContinents = list => {
  return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(
    continent => {
      return list.some(dev => dev.continent === continent)
    }
  )
}

export default allContinents
