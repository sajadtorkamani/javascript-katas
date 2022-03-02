const mostFrequentDays = (year: number): string[] => {
  const weekdayCounts: [string, number][] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ].map(weekday => {
    return [weekday, countWeekdaysInYear(weekday, year)]
  })

  const counts = weekdayCounts.map(([_, count]) => count)
  const highestCount = Math.max(...counts)

  return weekdayCounts
    .filter(([_, count]) => count === highestCount)
    .map(([weekday]) => weekday)
}

export const countWeekdaysInYear = (day: string, year: number): number => {
  let numWeekdays = 0
  const dayIndex = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ].indexOf(day)

  for (let month = 0; month <= 11; month++) {
    const monthDate = new Date(year, month)
    const numOfDaysInMonth = getNumOfDaysInMonth(monthDate)

    for (let date = 1; date <= numOfDaysInMonth; date++) {
      monthDate.setDate(date)

      if (monthDate.getDay() === dayIndex) {
        numWeekdays++
      }
    }
  }

  return numWeekdays
}

const getNumOfDaysInMonth = (month: Date): number => {
  return new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
}

export default mostFrequentDays
