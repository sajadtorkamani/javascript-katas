export const killKthBit = (num, k) => {
  const binary = num.toString(2);
  const replacementRegex = new RegExp(`(.)(?=.{${k - 1}}$)`);

  const newBinary = binary.replace(replacementRegex, '0');

  return parseInt(newBinary, 2);
};