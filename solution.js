export const merryChristmas = funcs => {
  let funcResults = {};

  funcs.forEach(func => {
    funcResults[func()] = func.name;
  });

  return 'Merry Christmas!'
    .split('')
    .map(char => funcResults[char])
    .join(',')
};