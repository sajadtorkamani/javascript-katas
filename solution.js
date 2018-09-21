/**
 * Determine if a given set is a subset of another.
 *
 * @param s1 {Set}
 * @param s2 {Set}
 * @returns {boolean}
 */
export const isSubsetOf = (s1, s2) => {
  return Array
    .from(s1)
    .every(val => s2.has(val));
};

/**
 * Determine if a given set is a superset of another.
 *
 * @param s1 {Set}
 * @param s2 {Set}
 * @returns {boolean}
 */
export const isSupersetOf = (s1, s2) => {
  return isSubsetOf(s2, s1);
};
