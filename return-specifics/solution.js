const returnSpecifics = obj => {
  if (Object.keys(obj).length === 0) {
    return ['The Object is Empty'];
  }

  let nums = [];
  let methodNames = [];

  for (let key in obj) {
    const value = obj[key];

    if (typeof value === 'number') {
      nums.push(value);
    }

    if (typeof value === 'function') {
      methodNames.push(key);
    }
  }

  return nums.concat(methodNames);
};

export default returnSpecifics;