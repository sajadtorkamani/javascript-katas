const hydrate = str => {
  const numGlassesOfWater = str
    .match(/\d+/g)
    .map(Number)
    .reduce((a, b) => a + b);

  return numGlassesOfWater === 1
    ? `${numGlassesOfWater} glass of water`
    : `${numGlassesOfWater} glasses of water`;
};

export default hydrate;
