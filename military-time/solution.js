/**
 * @param {string} input
 * @returns {string}
 */
const getMilitaryTime = input => {
  return input
    .replace(/^\d{2}/, hour => {
      switch (true) {
        case /^12.+AM$/.test(input):
          return '00';
        case hour !== '12' && /PM/.test(input):
          return +hour + 12;
        default:
          return hour;
      }
    })
    .replace(/AM|PM/, '');
};

export default getMilitaryTime;
