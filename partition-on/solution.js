/**
 * @param {Function} predicate
 * @param {Array} list
 * @returns {mumber}
 */
const partitionOn = (predicate, list) => {
  let truthies = [];
  let falsies = [];

  list.forEach(item => {
    if (predicate(item)) {
      truthies.push(item);
    } else {
      falsies.push(item);
    }
  });

  [...falsies, ...truthies].forEach((item, index) => {
    list[index] = item;
  });

  return falsies.length;
};

export default partitionOn;
