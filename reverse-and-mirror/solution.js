export const reverseString = str => {
  return str
    .split('')
    .reverse()
    .join('');
};

export const invertCasing = str => {
  return str.replace(/\w/g, letter => {
    return letter === letter.toUpperCase()
      ? letter.toLowerCase()
      : letter.toUpperCase();
  });
};

const reverseAndMirror = (s1, s2) => {
  let a = reverseString(s2);
  a = invertCasing(a);

  let part2 = reverseString(s1);
  part2 = invertCasing(part2);
  part2 += invertCasing(s1);

  return `${a}@@@${part2}`;
};

export default reverseAndMirror;