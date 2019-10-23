const numberOfSigfigs = (num: string): number => {
  // Leading zeros do not count.
  num = num.replace(/^0+/, '');

  // Trailing zeros in non-decimal numbers do not count.
  if (!num.includes('.')) {
    num = num.replace(/0+$/, '');
  }

  return (num.match(/\d/g) || []).length;
};

export default numberOfSigfigs;
