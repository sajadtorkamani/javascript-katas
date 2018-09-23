/**
 * Reverse order of array elements
 *
 * @param arr
 * @returns {Array}
 */
export const reverseOrder = arr => arr.reverse();

/**
 * Reverse lines within string.
 *
 * @param str
 * @returns {string}
 */
export const reverseLines = str => {
  return str
    .split('\n')
    .reverse()
    .join('\n');
};

/**
 * Reverse the sections within a string.
 *
 * @param str {string}
 * @returns {string}
 */
export const reverseSections = str => {
  return str.match(/([a-z]+)|([0-9]+)|([^a-z0-9]+)/gi)
    .map(section => section.split('').reverse().join(''))
    .join('');
};

export const reverseAll = arr => {
  let result;

  // Reverse order
  result = reverseOrder(arr);

  // Reverse lines
  result = result.map(reverseLines);

  // Reverse sections within the each line.
  result = result.map(element => {
    return element
      .split('\n')
      .map(reverseSections)
      .join('\n');
  });

  return result;
};