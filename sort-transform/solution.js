const sortTransform = nums => {
  const indices = [0, 1, nums.length - 2, nums.length - 1]

  const isCorrectIndex = (val, index) => indices.includes(index)
  const fromCharCode = num => String.fromCharCode(num)

  const firstPart = nums
    .filter(isCorrectIndex)
    .map(fromCharCode)
    .join('')

  const secondPart = nums
    .sort((a, b) => a - b)
    .filter(isCorrectIndex)
    .map(fromCharCode)
    .join('')

  const thirdPart = nums
    .sort((a, b) => b - a)
    .filter(isCorrectIndex)
    .map(fromCharCode)
    .join('')

  const fourthPart = nums
    .map(fromCharCode)
    .sort()
    .filter(isCorrectIndex)
    .join('')

  return [firstPart, secondPart, thirdPart, fourthPart].join('-')
}

export default sortTransform
