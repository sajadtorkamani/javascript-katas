const scanningSkies = destinations => {
  return destinations
    .sort((a, b) => {
      return a.dist === b.dist
        ? a.price - b.price
        : b.dist - a.dist;
    })
    .map(v => v.dest)
};

export default scanningSkies;