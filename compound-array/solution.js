const compoundArray = (arr1, arr2) => {
  let result = []
  const maxLength = Math.max(arr1.length, arr2.length)

  for (let i = 0; i < maxLength; i++) {
    if (typeof arr1[i] !== 'undefined') {
      result.push(arr1[i])
    }

    if (typeof arr2[i] !== 'undefined') {
      result.push(arr2[i])
    }
  }

  return result
}

export default compoundArray
