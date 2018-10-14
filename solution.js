/**
 * @constructor
 */
export function List() {
}

/**
 * @param nums {Array<number>}
 * @param digits {Array<number>}
 * @returns {Array}
 */
List.prototype.countSpecDigits = function (nums, digits) {
  const numsAsString = nums.join('');

  const digitCount = digit => {
    return (numsAsString.match(new RegExp(digit, 'g')) || []).length;
  };

  return digits.map(digit => [digit, digitCount(digit)]);
};