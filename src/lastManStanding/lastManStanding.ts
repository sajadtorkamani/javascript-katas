export function lastManStanding(n: number): number {
  let numbers = new Array(n).fill(undefined).map((_value, index) => index + 1)
  let iterationCount = 0
  let direction = 'left-to-right'

  // Starting from the right, remove every other number)
  while (numbers.length > 1) {
    if (direction === 'left-to-right') {
      numbers = numbers
        .map((num, index) => {
          return index % 2 === 0 ? null : num
        })
        .filter(Boolean)
      direction = 'right-to-left'
    } else {
      numbers = numbers
        .reverse()
        .map((num, index) => {
          return index % 2 === 0 ? null : num
        })
        .filter(Boolean)
        .reverse()
      direction = 'left-to-right'
    }

    iterationCount += 1
    console.log(`After iteration ${iterationCount}: ${numbers}`)
  }

  console.log({ numbers })

  return numbers[0]
}
