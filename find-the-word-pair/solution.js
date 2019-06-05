/**
 * @param words {Array<string>}
 * @param target {string}
 * @returns {Array|null}
 */
const compoundMatch = (words, target) => {
  let _checkedWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (_checkedWords.includes(word)) {
      continue;
    }
    _checkedWords.push(word);

    if (!target.includes(word)) {
      continue;
    }

    const adjacentWords = words.slice(i + 1);

    for (let j = 0; j < adjacentWords.length; j++) {
      const adjacentWord = adjacentWords[j];

      if (!target.includes(adjacentWord)) {
        continue;
      }

      if (word + adjacentWord === target) {
        return [word, adjacentWord, [i, words.indexOf(adjacentWord)]];
      }

      if (adjacentWord + word === target) {
        return [word, adjacentWord, [words.indexOf(adjacentWord), i]];
      }
    }
  }

  return null;
};

export default compoundMatch;