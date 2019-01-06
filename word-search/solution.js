const wordSearch = (word, text) => {
  const wordRegex = new RegExp(`\\b${word}\\b`);

  return wordRegex.test(text);
};

export default wordSearch;