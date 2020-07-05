/**
 * @param {Date | string} date
 * @returns {string}
 */
const findOutChristmasWeekday = date => {
  const day = new Date(date).getDay()

  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ][day]
}

export default findOutChristmasWeekday
