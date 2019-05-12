/**
 * @param nums {Array<number>}
 */
const findUniq = nums => {
  let _checkedNums = [];

  return nums.find(num => {
    if (_checkedNums.includes(num)) { return false; }

    _checkedNums.push(num);

    return nums.filter(v => v === num).length === 1;
  });
};

export default findUniq;