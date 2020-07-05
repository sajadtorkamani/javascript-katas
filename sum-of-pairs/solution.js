/**
 * @param list {Array<num>}
 * @param sum {number}
 *
 * @return {Array|undefined}
 */
const sum_pairs = (list, sum) => {
  for (let index = 0; index < list.length; index++) {
    if (list[index] + list[index + 1] === sum) {
      return [list[index], list[index + 1]]
    }
  }

  for (
    let currentNumIndex = 0;
    currentNumIndex < list.length;
    currentNumIndex++
  ) {
    const currentNum = list[currentNumIndex]

    for (
      let otherNumIndex = currentNumIndex + 1;
      otherNumIndex < list.length;
      otherNumIndex++
    ) {
      const otherNum = list[otherNumIndex]

      if (currentNum + otherNum === sum) {
        return [currentNum, otherNum]
      }
    }
  }
}

export default sum_pairs
