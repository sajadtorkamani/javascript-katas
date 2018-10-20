export const one = (arr, fn) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (fn(element)) { count += 1; }

    // Optimisation - don't bother processing any more elements
    if (count > 1) { return false; }
  }

  return count === 1;
}