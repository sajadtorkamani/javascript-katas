export const getLetterPosition = letter => 'abcdefghijklmnopqrstuvwxyz'.indexOf(letter) + 1;

export const alphaSeq = str => {
  return str
    .toLowerCase()
    .split('')
    .sort()
    .map(letter => {
      return letter.toUpperCase() + letter.repeat(getLetterPosition(letter) - 1);
    })
    .join(',');
}
