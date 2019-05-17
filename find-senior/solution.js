/**
 * @param {Array<{Object}>} list
 * @return {Array<Object>}
 */
const findSenior = list => {
  const ages = list.map(dev => dev.age);
  const oldestAge = Math.max(...ages);

  return list.filter(dev => dev.age === oldestAge);
};

export default findSenior;