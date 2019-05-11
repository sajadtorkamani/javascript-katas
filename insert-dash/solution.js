const insertDash = num => {
  const isOdd = n => n % 2 === 1;

  return num
    .toString()
    .split('')
    .map((num, index, nums) => {
      const nextNum = nums[index + 1];

      return isOdd(num) && isOdd(nextNum)
        ? num + '-'
        : num;
    })
    .join('');
};

export default insertDash;