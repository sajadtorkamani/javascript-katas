const firstNonRepeated = (str: string): string | null => {
  const nonRepeatingChar = str.split('').find((char, index, chars) => {
    const count = chars.filter(c => c === char).length;
    return count === 1;
  });

  return nonRepeatingChar || null;
};

export default firstNonRepeated;
