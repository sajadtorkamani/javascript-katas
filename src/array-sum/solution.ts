const arraySum = (arr: any[]): number => {
  return arr.reduce((sum, val) => {
    // Handle nested arrays
    if (Array.isArray(val)) {
      return sum + arraySum(val)
    }

    return sum + (typeof val === 'number' ? val : 0)
  }, 0)
}

export default arraySum
