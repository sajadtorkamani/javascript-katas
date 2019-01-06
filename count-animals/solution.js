const countAnimals = sentence => {
  return (sentence.match(/\b(\d+)\b/g) || [])
    .map(Number)
    .reduce((a, b) => a + b, 0);
};

export default countAnimals;