/**
 * @param list {Array<{}>}
 * @return {string}
 */
const getFirstPython = list => {
  const pythonDev = list.find(dev => dev.language === 'Python')

  return pythonDev
    ? `${pythonDev.firstName}, ${pythonDev.country}`
    : 'There will be no Python developers'
}

export default getFirstPython
