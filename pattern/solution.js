const pattern = num => {
  if (num < 1) {
    return '';
  }

  return new Array(num)
    .fill()
    .map((v, index) => {
      let digits = [];

      for (let digit = num; digit >= (num - index); digit--) {
        digits.push(digit);
      }

      return digits.join('');
    })
    .reverse()
    .join('\n');
};

export default pattern;