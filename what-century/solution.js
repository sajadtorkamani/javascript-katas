/**
 * @param {string} year
 * @returns {string}
 */
const whatCentury = year => {
  let century =
    year.slice(-2) === '00' ? year.slice(0, 2) : +year.slice(0, 2) + 1;

  century = century.toString();

  switch (true) {
    case /11|12|13/.test(century):
      return century + 'th';
    case century.endsWith('1'):
      return century + 'st';
    case century.endsWith('2'):
      return century + 'nd';
    case century.endsWith('3'):
      return century + 'rd';
    default:
      return century + 'th';
  }
};

export default whatCentury;
