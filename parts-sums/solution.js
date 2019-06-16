const partsSums = list => {
  if (list.length === 0) {
    return [0];
  }

  const result = [list.reduce((a, b) => a + b)];
  const sum = (a, b) => a + b;

  for (let i = 1; i < list.length; i++) {
    result.push(result[0] - list.slice(0, i).reduce(sum));
  }

  return result.concat([0]);
};

export default partsSums;
