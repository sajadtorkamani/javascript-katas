const roundToFive = nums => {
  return nums.map(num => Math.round(num / 5) * 5);
};

export default roundToFive;