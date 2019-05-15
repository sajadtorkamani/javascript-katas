/**
 * @param text {string}
 */
const encryptThis = text => {
  return text
    .split(' ')
    .map(word => {
      return word
        .replace(/(?<=\w)\w/, word.slice(-1))
        .replace(/(?<=\w+)\w$/, word[1])
        .replace(/^\w/, m => m.charCodeAt(0));
    })
    .join(' ');
};

export default encryptThis;