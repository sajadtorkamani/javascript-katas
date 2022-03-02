/**
 * @param {number} numPresents
 * @returns {number}
 */
const reindeers = numPresents => {
  const numReindeers = Math.ceil(numPresents / 30) + 2

  if (numReindeers > 8) {
    throw Error('Too many reindeers!')
  }

  return numReindeers
}

export default reindeers
