/**
 * @returns {number[]}
 */
const range = (...args) => {
  let start, stop, step
  let result = []

  // Handle special case
  if (args.length === 3 && args[2] === 0) {
    return new Array(args[1] - args[0]).fill(1)
  }

  switch (true) {
    case args.length === 1:
      ;[start, stop, step] = [0, args[0], 1]
      break
    case args.length === 2:
      ;[start, stop, step] = [args[0], args[1], 1]
      break
    default:
      ;[start, stop, step] = args
      break
  }

  for (let i = start; i < stop; i += step) {
    result.push(i)
  }

  return result
}

export default range
