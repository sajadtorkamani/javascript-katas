/**
 * @param {string} str
 * @return {Array}
 */
const countVegetables = str => {
  const FRUITS = [
    'cabbage',
    'carrot',
    'celery',
    'cucumber',
    'mushroom',
    'onion',
    'pepper',
    'potato',
    'tofu',
    'turnip'
  ];

  const validFruits = str.split(' ').filter(item => FRUITS.includes(item));

  return Array.from(new Set(validFruits))
    .map(fruit => [validFruits.filter(v => v === fruit).length, fruit])
    .sort((a, b) => (a[0] === b[0] ? b > a : b[0] - a[0]));
};

export default countVegetables;
