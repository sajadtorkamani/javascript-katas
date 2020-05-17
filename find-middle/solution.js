const findMiddle = str => {
  if (typeof str !== 'string' || !/\d/.test(str)) {
    return -1;
  }

  const product = str
    .replace(/\D/g, '')
    .split('')
    .map(Number)
    .reduce((a, b) => a * b)
    .toString();

  const length = product.length;

  return length % 2 === 1
    ? +product[Math.floor(length / 2)]
    : +product.slice((length / 2) - 1, (length / 2) + 1); // prettier-ignore
};

export default findMiddle;
