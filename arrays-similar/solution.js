/**
 * @param {any[]} a1
 * @param {any[]} a2
 * @returns {boolean}
 */
const arraysSimilar = (a1, a2) => {
  if (a1.length !== a2.length) {
    return false;
  }

  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);

  for (let index = 0; index < a1.length; index++) {
    if (a1[index] !== a2[index]) {
      return false;
    }
  }

  return true;
};

export default arraysSimilar;
