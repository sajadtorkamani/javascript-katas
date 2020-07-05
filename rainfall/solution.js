const getMonthlyRainfall = (town, data) => {
  const townData = data.split('\n').find(line => line.startsWith(town))

  return townData.match(/\d+\.\d+/g).map(Number)
}

const getMean = nums => nums.reduce((a, v) => a + v, 0) / nums.length

export const mean = (town, data) => {
  if (!data.includes(town)) {
    return -1
  }

  const monthlyRainfall = getMonthlyRainfall(town, data)

  return getMean(monthlyRainfall)
}

export const variance = (town, data) => {
  if (!data.includes(town)) {
    return -1
  }

  const monthlyRainfall = getMonthlyRainfall(town, data)
  const meanRainfall = getMean(monthlyRainfall)

  return (
    monthlyRainfall
      .map(month => Math.pow(month - meanRainfall, 2))
      .reduce((sum, val) => sum + val) / 12
  )
}
