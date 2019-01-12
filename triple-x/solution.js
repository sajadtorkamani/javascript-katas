const tripleX = str => {
  return str.includes('x') && str.match(/x+/g)[0].length >= 3
};

export default tripleX;