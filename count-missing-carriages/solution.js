const countMissingCarriages = train => {
  const lastCarriage = train.slice(-1);
  const originalLength = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.match(new RegExp(`A(.*)${lastCarriage}`))[0].length;
  const currentLength = train.length;

  return originalLength - currentLength;
};

export default countMissingCarriages;