const addLetters = (...letters: string[]): string => {
  if (letters.length === 0) {
    return 'z';
  }

  const sum = letters.reduce(
    (sum, letter) => sum + letter.charCodeAt(0) - 96,
    0
  );

  return sum % 26 === 0 ? 'z' : String.fromCharCode(96 + (sum % 26));
};

export default addLetters;
