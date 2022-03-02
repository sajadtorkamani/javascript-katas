const dayPlan = (availableHours, numTasks, taskDuration) => {
  const availableMins = availableHours * 60
  const totalWorkMins = numTasks * taskDuration

  if (totalWorkMins > availableMins) {
    return "You're not sleeping tonight!"
  }

  const freeMins = availableMins - totalWorkMins
  const breakDuration = Math.ceil(freeMins / (numTasks - 1))
  const schedule = []

  for (let i = 0; i < numTasks * 2 - 1; i++) {
    if (i % 2 === 0) {
      schedule.push(taskDuration)
    } else {
      schedule.push(breakDuration)
    }
  }

  return schedule
}

export default dayPlan
