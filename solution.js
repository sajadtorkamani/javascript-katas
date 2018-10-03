export const mergeArrays = (a1, a2) => {
  let mergedArray = [];
  const longestLength = Math.max(...[a1.length, a2.length]);

  for (let i = 0; i < longestLength; i++) {
    if (a1[i] !== undefined) mergedArray.push(a1[i]);
    if (a2[i] !== undefined) mergedArray.push(a2[i]);
  }

  return mergedArray;
};