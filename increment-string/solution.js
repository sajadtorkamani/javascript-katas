/**
 * @param str {string}
 */
const incrementString = str => {
  const trailingNumRegex = /\d+$/;

  if (!trailingNumRegex.test(str)) {
    return str + '1';
  }

  const num = str.match(trailingNumRegex)[0];
  const string = str.replace(trailingNumRegex, '');

  if (num.endsWith('9')) {
    const leadingZeros = num
      .match(/0*(?=9+$)/)[0] // Get all leading zeros, if any
      .replace(/0/, ''); // Remove one zero

    return string + `${leadingZeros}${+num + 1}`;
  }

  return string + num.replace(/\d$/, m => +m + 1);
};

export default incrementString;