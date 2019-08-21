const car = (initialValue, numYears) => {
  let finalValue = initialValue;

  for (let year = 1; year <= numYears; year++) {
    if (year === 1 || year === 2) {
      finalValue = finalValue * 0.8;
    } else {
      finalValue = finalValue * 0.9;
    }
  }

  return finalValue.toFixed(2);
};

export default car;
