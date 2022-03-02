export const arrayMadness = (arr1, arr2) => {
  const arr1SquareSum = arr1.reduce((sum, num) => sum + Math.pow(num, 2), 0)
  const arr2CubeSum = arr2.reduce((sum, num) => sum + Math.pow(num, 3), 0)

  return arr1SquareSum > arr2CubeSum
}
