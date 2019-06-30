/**
 * @param {Object[]} g1
 * @param {Object[]} g2
 * @return {string}
 */
export const highestAge = (g1, g2) => {
  let peopleDictionary = {};
  let peopleList = [];

  [...g1, ...g2].forEach(({ name, age }) => {
    peopleDictionary[name] = peopleDictionary.hasOwnProperty(name)
      ? peopleDictionary[name] + age
      : age;
  });

  for (let name in peopleDictionary) {
    peopleList.push([name, peopleDictionary[name]]);
  }

  return peopleList.sort((a, b) => {
    return a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1];
  })[0][0];
};
