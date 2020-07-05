// Not the most readable solutions but thought I'd try something clever :P

/**
 * @param {string} str
 * @return {string}
 */
export const encode = str => {
  return str.replace(/[aeiou]/g, m => 'aeiou'.indexOf(m) + 1)
}

/**
 * @param {string} str
 * @return {string}
 */
export const decode = str => {
  return str.replace(/[1-5]/g, m => 'aeiou'.charAt(m - 1))
}
