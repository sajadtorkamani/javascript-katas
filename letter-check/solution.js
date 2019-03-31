const letterCheck = words => {
  const a = words[0].toLowerCase();
  const b = words[1].toLowerCase();

  return b
    .split('')
    .every(letter => a.includes(letter));
};

export default letterCheck;