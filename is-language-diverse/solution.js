/**
 * @param {Array<Object>} list
 * @return {boolean}
 */
const isLanguageDiverse = list => {
  const counts = ['Ruby', 'Python', 'JavaScript']
    .map(lang => list.filter(dev => dev.language === lang).length)
    .sort((a, b) => a - b)
  const minCount = Math.min(...counts)

  return counts.slice(1).every(count => count <= minCount * 2)
}

export default isLanguageDiverse
