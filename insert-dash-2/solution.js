const insertDashII = num => {
  let numStr = num.toString();
  const oddNumsRegex = /[13579](?=([13579]))/g;
  const evenNumsRegex = /[2468](?=([2468]))/g;
  let oddPairs = [];
  let evenPairs = [];
  let match;

  // Find odd pairs
  while ((match = oddNumsRegex.exec(numStr))) {
    oddPairs.push(match[0] + match[1]);
  }

  // Find even pairs
  while ((match = evenNumsRegex.exec(numStr))) {
    evenPairs.push(match[0] + match[1]);
  }

  // Replace odd pairs
  oddPairs.forEach(oddPair => {
    numStr = numStr.replace(oddPair, m => m[0] + '-' + m[1]);
  });

  // Replace even pairs
  evenPairs.forEach(evenPair => {
    numStr = numStr.replace(evenPair, m => m[0] + '*' + m[1]);
  });

  return numStr;
};

export default insertDashII;
