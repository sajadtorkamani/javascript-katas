/**
 * @param rawNum {number}
 * @returns {string}
 */
const groupByCommas = rawNum => {
  const num = rawNum.toString();

  if (num.length <= 3) {
    return num;
  }

  const prefix = num.slice(0, num.length % 3);
  const hundreds = num
    .slice(prefix.length)
    .replace(/\d{3}/g, m => ',' + m);

  return `${prefix}${hundreds}`.replace(/^,/, '');
};

export default groupByCommas;