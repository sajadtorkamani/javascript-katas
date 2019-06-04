/**
 * @param data {Array<number>}
 * @return {Array<number>}
 */
const dataReverse = data => {
  return data
    .join('')
    .match(/\d{8}/g)
    .reverse()
    .join('')
    .split('')
    .map(Number);
};

export default dataReverse;