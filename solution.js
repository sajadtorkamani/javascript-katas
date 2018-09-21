export const average = (...args) => {
  const sum = args.reduce((a, b) => a + b);

  return sum / args.length;
};