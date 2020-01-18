/**
 * @param {string} str
 * @returns {string}
 */
const findChildren = str => {
  const parents = str.match(/[A-Z]/g);
  const children = str.match(/[a-z]/g);

  return parents
    .map(parent => {
      const parentChildren = children
        .filter(child => child === parent.toLowerCase())
        .join('');

      return parent + parentChildren;
    })
    .sort((a, b) => a[0].localeCompare(b[0]))
    .join('');
};

export default findChildren;
