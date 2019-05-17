/**
 * @param {Array<Object>} devs
 * @return {Array<Object>}
 */
const addUsername = devs => {
  const year = new Date().getFullYear();

  const buildUsername = dev => {
    return dev.firstName.toLowerCase() + dev.lastName[0].toLowerCase() + (year - dev.age);
  };

  return devs.map(dev => ({
    ...dev,
    username: buildUsername(dev)
  }));
};

export default addUsername;