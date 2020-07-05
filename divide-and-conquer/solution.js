const divCon = nums => {
  const stringNumsSum = nums
    .filter(num => typeof num === 'string')
    .reduce((a, b) => Number(a) + Number(b), 0)

  const integerNumsSum = nums
    .filter(num => typeof num === 'number')
    .reduce((a, b) => a + b, 0)

  return integerNumsSum - stringNumsSum
}

export default divCon
