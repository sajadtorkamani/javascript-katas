/**
 * @param {Array<string>} words
 * @constructor
 */
function Dictionary(words) {
  this.words = words;
}

/**
 * @param {string} pattern
 * @return {Array<string>}
 */
Dictionary.prototype.getMatchingWords = function (pattern) {
  const regex = new RegExp('^' + pattern.replace(/\?/g, '\\w') + '$');

  return this.words.filter(word => regex.test(word));
};

export default Dictionary;