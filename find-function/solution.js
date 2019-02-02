const FindFunction = (a, b) => {
  const func = a.find(v => typeof v === 'function');

  return b.filter(func);
};

export default FindFunction;