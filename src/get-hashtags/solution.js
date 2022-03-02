/**
 * @param str {string}
 * @return {Array}
 */
const getHashtags = str => {
  return str
    .split(' ')
    .filter(word => /^#+\w+$/.test(word))
    .map(word => word.replace(/#/g, ''))
}

export default getHashtags
