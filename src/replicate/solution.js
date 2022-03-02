const replicate = (times, number) => {
  return times > 0 ? new Array(times).fill(number) : []
}

export default replicate
