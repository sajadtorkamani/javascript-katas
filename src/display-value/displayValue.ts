/**
 Given some `minutes`, return a human-readable string in the form of:
 `x month x week x day x hours x minutes`
 */

// 1 month = 40,320
// 1 week = 10,080 minutes
// 1 day = 1440 minutes
// 1 hour = 60 minutes
export function displayValue(totalMins: number): string {
  const MONTH_MINS = 40320
  const WEEK_MINS = 10080
  const DAY_MINS = 1440
  const HOUR_MINS = 60

  if (totalMins === 0) {
    return '0 minutes'
  }

  let minsRemaining = totalMins

  // Calculate months
  const months = Math.floor(minsRemaining / MONTH_MINS)

  // Get mins left after calculating number of months
  minsRemaining = months ? minsRemaining % MONTH_MINS : minsRemaining

  // Calculate weeks
  const weeks = Math.floor(minsRemaining / WEEK_MINS)

  // Get mins left after calculating number of weeks
  minsRemaining = weeks ? minsRemaining % WEEK_MINS : minsRemaining

  // Calculate days
  const days = Math.floor(minsRemaining / DAY_MINS)

  // Get mins left after calculating days of weeks
  minsRemaining = days ? minsRemaining % DAY_MINS : minsRemaining

  // Calculate hours
  const hours = Math.floor(minsRemaining / HOUR_MINS)

  // Get mins left after calculating days of hours
  minsRemaining = hours ? minsRemaining % HOUR_MINS : minsRemaining

  const result = []

  if (months) result.push(pluralize(months, 'month'))
  if (weeks) result.push(pluralize(weeks, 'week'))
  if (days) result.push(pluralize(days, 'day'))
  if (hours) result.push(pluralize(hours, 'hour'))
  if (minsRemaining) result.push(pluralize(minsRemaining, 'minute'))

  return result.join(' ')
}

function pluralize(count: number, word: string) {
  return count === 1 ? `${count} ${word}` : `${count} ${word}s`
}
