export const jeringonza = str => {
  const replaceVowel = vowel => {
    const p = vowel === vowel.toUpperCase() ? 'P' : 'p'

    return `${vowel}${p}${vowel}`
  }

  return str.replace(/[aeiou]/gi, replaceVowel)
}
