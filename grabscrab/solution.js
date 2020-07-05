/**
 * @param {string} anagram
 * @param {string[]} dictionary
 * @returns {string[]}
 */
const grabscrab = (anagram, dictionary) => {
  const sort = word => word.split('').sort().join(''); // prettier-ignore
  const sortedAnagram = sort(anagram)

  return dictionary.filter(
    word => word.length === anagram.length && sort(word) === sortedAnagram
  )
}

export default grabscrab
