export const pendulum = nums => {
  let result = [Math.min(...nums)]

  nums
    .sort((a, b) => a - b)
    .slice(1)
    .forEach((num, index) => {
      index % 2 === 0 ? result.push(num) : result.unshift(num)
    })

  return result
}
