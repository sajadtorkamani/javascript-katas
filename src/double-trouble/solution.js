export const trouble = (nums, target) => {
  let indexesToRemove = []

  for (let index = 0; index < nums.length - 1; index++) {
    const currentNum = nums[index]
    const nextNum = nums[index + 1]

    if (currentNum + nextNum === target) {
      indexesToRemove.push(index + 1)
    }
  }

  return nums.filter((num, index) => !indexesToRemove.includes(index))
}
