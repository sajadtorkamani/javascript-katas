/**
 * @param {string} str
 * @return {string}
 */
const errBob = str => {
  return str.replace(/\b\w*[bcdfghjklmnpqrstvwxyz]\b/gi, word => {
    return /[A-Z]$/.test(word) ? word + 'ERR' : word + 'err'
  })
}

export default errBob
