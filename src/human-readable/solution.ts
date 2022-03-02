const humanReadable = (totalSeconds: number): string => {
  const SECONDS_PER_HOUR = 3600
  const SECONDS_PER_MINUTE = 60

  const hoursFloat = totalSeconds / SECONDS_PER_HOUR
  const hours = Math.floor(hoursFloat)
  const hoursRemainder = hoursFloat - hours

  const minutesFloat = hoursRemainder * SECONDS_PER_MINUTE
  const minutes = Math.floor(minutesFloat)
  const minutesRemainder = minutesFloat - minutes

  const seconds = Math.round(minutesRemainder * SECONDS_PER_MINUTE)

  return [hours, minutes, seconds]
    .map(unitNumber => {
      const unit = unitNumber.toString()
      return unit.length === 1 ? `0${unit}` : unit
    })
    .join(':')
}

export default humanReadable
