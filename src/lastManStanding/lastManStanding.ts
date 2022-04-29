export function lastManStanding(numbersLength: number): number {
  let numbers = createNumbers(numbersLength)
  let direction = 'left-to-right'

  while (numbers.length > 1) {
    if (direction === 'left-to-right') {
      numbers = numbers.map(removeEveryOtherNum)
      direction = 'right-to-left'
    } else {
      numbers = numbers
        .reverse()
        .map(removeEveryOtherNum)
        .reverse()
      direction = 'left-to-right'
    }

    numbers = numbers.filter(Boolean)
  }

  return numbers[0]
}

function createNumbers(length: number) {
  return new Array(length).fill().map((_, index) => index + 1)
}

function removeEveryOtherNum(num: number, index: number) {
  return index % 2 === 0 ? null : num
}
