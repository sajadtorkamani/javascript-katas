// Simulate global from codewars kata.
var fruitsName = [
  'apple',
  'pear',
  'banana',
  'watermelon',
  'grape',
  'plum',
  'blueberry',
  'persimmon',
  'pomegranate',
  'pineapple',
  'orange',
  'mangosteen',
  'durian',
  'lemon',
  'pitaya',
  'carambola',
  'tomato',
  'apricot',
  'cherry',
  'coconut',
  'peach',
  'fig',
  'litchi',
  'ginkgo',
  'cantaloupe',
  'hawthorn',
  'mango',
  'jujube'
]

/**
 * Split fruit into two.
 *
 * @param word {string}
 * @returns {Array}
 */
export const splitFruit = word => {
  const halfIndex = Math.ceil(word.length / 2)

  return [word.slice(0, halfIndex), word.slice(halfIndex)]
}

/**
 * Cut fruits.
 *
 * @param fruits {Array}
 * @returns {Array}
 */
export const cutFruits = fruits => {
  return fruits
    .map(fruit => {
      return fruitsName.includes(fruit) ? splitFruit(fruit) : [fruit]
    })
    .reduce((a, b) => a.concat(b))
}
