/**
 * Format an arbitrary number as money with thousands separators.
 *
 * TODO: Refactor
 *
 * @param num {number}
 * @return {string}
 */
const numberToMoney = num => {
  const thousands = formatAsThousands(parseInt(num));
  const decimals = num.toString().match(/\.(\d){2}/)[0];
  
  return `${thousands}${decimals}`
    // Removing trailing zeros
    .replace('.00', '')
    .replace(/\.(\d)0/, m => m.replace('0', ''));
};

/**
 * Format number with thousands separator.
 *
 * @param num {number}
 * @returns {string}
 */
export const formatAsThousands = num => {
  const formattedNum = reverseNum(num).replace(/(\d){3}/g, m => m + ',');

  return reverseNum(formattedNum).replace(/^,/, '');
};

/**
 * Reverse a given number.
 *
 * @param num {number|string}
 * @return {string}
 */
const reverseNum = num => {
  return num
    .toString()
    .split('')
    .reverse()
    .join('');
};

export default numberToMoney;