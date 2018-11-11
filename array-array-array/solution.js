export const explode = x => {
  if (x.every(v => typeof v === 'string')) {
    return 'Void!';
  }

  const score = x
    .filter(v => typeof v === 'number')
    .reduce((a, b) => a + b);

  return new Array(score).fill(x);
};