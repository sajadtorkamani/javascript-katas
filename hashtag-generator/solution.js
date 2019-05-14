/**
 * @param str {string}
 */
const generateHashtag = str => {
  if (!/\w/.test(str)) {
    return false;
  }

  const hashtag = '#' + str
    .match(/\b\w+\b/g)
    .map(word => {
      return word
        .toLowerCase()
        .replace(/^\w/, m => m.toUpperCase());
    })
    .join('');

  return hashtag.length <= 140 ? hashtag : false;
};

export default generateHashtag;