const uniq = arr => {
  let duplicatesIndices = [];

  arr.forEach((val, index) => {
    if (index >= 1 && val === arr[index - 1]) {
      duplicatesIndices.push(index);
    }
  });

  return arr.filter((val, index) => !duplicatesIndices.includes(index));
};

export default uniq;
