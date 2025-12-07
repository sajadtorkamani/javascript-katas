// Given some `minutes`, return a human-readable string in the form of:
// `x month x week x day x hours x minutes`
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
  if (months) {
    minsRemaining = minsRemaining % MONTH_MINS
  }

  // Calculate weeks
  const weeks = Math.floor(minsRemaining / WEEK_MINS)
  if (weeks) {
    minsRemaining = minsRemaining % WEEK_MINS
  }

  // Calculate days
  const days = Math.floor(minsRemaining / DAY_MINS)
  if (days) {
    minsRemaining = minsRemaining % DAY_MINS
  }

  // Calculate hours
  const hours = Math.floor(minsRemaining / HOUR_MINS)
  if (hours) {
    minsRemaining = minsRemaining % HOUR_MINS
  }

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
