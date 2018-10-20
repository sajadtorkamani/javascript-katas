export const smallEnough = (nums, threshold) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > threshold) {
      return false;
    }
  }
  return true;
};
