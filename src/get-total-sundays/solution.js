const getTotalSundays = (startYear, endYear = startYear) => {
  let total = 0

  for (let year = startYear; year <= endYear; year++) {
    for (let month = 0; month < 12; month++) {
      const date = new Date(year, month)

      if (date.getDay() === 0) {
        total += 1
      }
    }
  }

  return total
}

export default getTotalSundays
