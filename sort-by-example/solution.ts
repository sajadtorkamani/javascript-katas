const exampleSort = <T>(arr: T[], exampleArr: T[]): T[] => {
  return arr.sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b))
}

export default exampleSort
