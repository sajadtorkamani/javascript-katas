const explode = str => {
  return str
    .split('')
    .map(digit => digit.repeat(digit))
    .join('')
};

export default explode;