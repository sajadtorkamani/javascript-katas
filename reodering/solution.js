export const reOrdering = sentence => {
  const words = sentence.split(' ');
  const uppercaseWords = words.filter(w => /^[A-Z]/.test(w));
  const lowercaseWords = words.filter(w => /^[a-z]/.test(w));

  return uppercaseWords.concat(lowercaseWords).join(' ');
};