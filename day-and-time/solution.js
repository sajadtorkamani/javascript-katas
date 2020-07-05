import moment from 'moment'

const dayAndTime = mins => {
  const sundayMidnight = new Date('2019-04-07T00:00:00')

  return moment(sundayMidnight)
    .add(mins, 'minutes')
    .format('dddd HH:mm')
}

export default dayAndTime
