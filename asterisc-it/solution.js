const asteriscIt = digits => {
  if (digits instanceof Array) {
    digits = digits.join('');
  }

  return digits
    .toString()
    .split('')
    .map((num, index, nums) => {
      const isEvenPair = num % 2 === 0 && nums[index + 1] % 2 === 0;

      return isEvenPair ? `${num}*` : num;
    })
    .join('');
};

export default asteriscIt;