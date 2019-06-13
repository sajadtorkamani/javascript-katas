/**
 * @param {string} str
 * @returns {Array<number>}
 */
const parse = str => {
  let result = [];
  let val = 0;

  str.split('').forEach(cmd => {
    switch (cmd) {
      case 'i':
        val += 1;
        break;
      case 'd':
        val -= 1;
        break;
      case 's':
        val = val * val;
        break;
      case 'o':
        result.push(val);
        break;
    }
  });

  return result;
};

export default parse;
