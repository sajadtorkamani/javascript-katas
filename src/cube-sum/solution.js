const cubeSum = (a, b) => {
  let sum = 0
  const startNum = Math.min(a, b) + 1
  const endNum = Math.max(a, b)

  for (let num = startNum; num <= endNum; num++) {
    sum += Math.pow(num, 3)
  }

  return sum
}

export default cubeSum
