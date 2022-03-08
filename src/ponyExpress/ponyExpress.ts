export const ponyExpress = (stationDistances: number[]): number => {
  const RIDER_DISTANCE_LIMIT = 100
  const totalDistance = stationDistances.reduce((a, b) => a + b)
  
  return Math.ceil(totalDistance / RIDER_DISTANCE_LIMIT)
}
