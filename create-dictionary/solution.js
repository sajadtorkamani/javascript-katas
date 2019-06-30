/**
 * @param {string[]} keys
 * @param {number[]} values
 * @returns {Object}
 */
export const createDict = (keys, values) => {
  let dictionary = {};

  keys.forEach((key, index) => {
    const value = typeof values[index] !== 'undefined' ? values[index] : null;

    dictionary[key] = value;
  });

  return dictionary;
};
