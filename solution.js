export const similarity = (a, b) => {
  const uniqueNums = Array.from(
    new Set(a.concat(b))
  );

  return uniqueNums
    .filter(num => {
      return a.includes(num) && b.includes(num)
  }).length / uniqueNums.length;
};