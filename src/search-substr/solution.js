/**
 * @param haystack {string}
 * @param needle {string}
 * @param allowOverlap {boolean}
 * @return {number}
 */
function searchSubstr(haystack, needle, allowOverlap = true) {
  if (!needle) {
    return 0
  }

  const regex =
    allowOverlap && isAllSameChars(needle)
      ? new RegExp(
          `${needle[0]}(?=${needle[0].repeat(needle.length - 1)})`,
          'g'
        )
      : new RegExp(needle, 'g')

  return (haystack.match(regex) || []).length
}

/**
 * @param str {string}
 * @return {boolean}
 */
const isAllSameChars = str => {
  return new RegExp('^' + str[0] + '+$').test(str)
}

export default searchSubstr
