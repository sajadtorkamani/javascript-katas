/**
 * @param {Array<Object>} devs
 * @return {Array<Object>}
 */
const askForMissingDetails = devs => {
  let result = []
  const properties = Object.keys(devs[0])

  devs.forEach(dev => {
    const missingIndex = Object.values(dev).findIndex(v => v === null)

    if (missingIndex > -1) {
      result.push({
        ...dev,
        question: `Hi, could you please provide your ${properties[missingIndex]}.`
      })
    }
  })

  return result
}

export default askForMissingDetails
