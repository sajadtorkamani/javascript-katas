/**
 * @param {string} str
 * @returns {Array}
 */
const runLengthEncoding = str => {
  if (str.length === 0) {
    return [];
  }

  return str.match(/(.)(\1)*/g).map(run => {
    return [run.length, run[0]];
  });
};

export default runLengthEncoding;
