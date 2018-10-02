export const isNarcissistic = num => {
  const digits = num
    .toString()
    .split('')
    .map(Number);

  return digits.reduce((acc, val) => acc += Math.pow(val, digits.length), 0) === num;
};