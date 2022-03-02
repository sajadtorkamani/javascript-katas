const isValidCoordinates = coords => {
  if (coords.match(/[^-\d,.\s]/)) {
    return false
  }

  const [lat, long] = coords.split(', ').map(Number)

  return lat >= -90 && lat <= 90 && (long >= -180 && long <= 180)
}

export default isValidCoordinates
