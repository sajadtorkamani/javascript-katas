/**
 * @param names {Array<Array>}
 */
const namesSorter = names => {
  return names
    .reduce((a, b) => a.concat(b), [])
    .sort((a, b) => {
      return a.length === b.length
        ? a.localeCompare(b)
        : a.length - b.length;
    });
};

export default namesSorter;