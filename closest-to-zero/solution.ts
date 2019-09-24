const closest = (nums: number[]): number | null => {
  const sortedNums = unique(nums).sort((a, b) => Math.abs(a) - Math.abs(b));

  const moreThanOneCandidate =
    sortedNums[0] !== sortedNums[1] &&
    Math.abs(sortedNums[0]) === Math.abs(sortedNums[1]);

  return moreThanOneCandidate ? null : sortedNums[0];
};

const unique = (items: number[]): number[] => {
  const uniqueNums: number[] = [];

  items.forEach(num => {
    if (!uniqueNums.includes(num)) {
      uniqueNums.push(num);
    }
  });

  return uniqueNums;
};

export default closest;
