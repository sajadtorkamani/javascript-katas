export default function sumLength(nums: number[]): string {
  const positivesSum = nums
    .filter(num => num > 0)
    .reduce((sum, num) => sum + num, 0);

  const numZeros = nums.filter(num => num === 0).length;
  const numNegatives =
    nums.filter(num => num < 0).length + Math.ceil(numZeros / 2);

  return `${positivesSum} ${numNegatives}`;
}
