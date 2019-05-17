/**
 * @param n {number}
 * @param val {*}
 */
const prefill = (n, val) => {
  if (n === undefined || !/^\d+$/.test(n.toString())) {
    throw new TypeError(`${n} is invalid`);
  }

  return new Array(+n).fill(val);
};

export default prefill;