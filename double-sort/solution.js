export const dbSort = arr => {
  const nums = arr
    .filter(v => typeof v === 'number')
    .sort((a, b) => a - b);

  const strings = arr
    .filter(v => typeof v === 'string')
    .sort();

  return nums.concat(strings);
};