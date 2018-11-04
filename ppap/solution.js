export const ppap = (a1, a2) => {
  const mergedWords = a1
    .concat(a2)
    .map(word => {
      return word
        .toLowerCase()
        .replace(/^\w/, m => m.toUpperCase());
    });

  const commonWord = mergedWords.find(word => mergedWords.filter(w => w === word).length === 2);
  const uncommonWords = mergedWords.filter(word => word !== commonWord).reverse();

  return [commonWord, ...uncommonWords, commonWord].join('-');
};