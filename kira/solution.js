const kira = (nums1, nums2, str) => {
  const remainders = nums1.map((num, index) => num % nums2[index]);

  return Math.max(...remainders) % 2 === 0
    ? str.toLowerCase()
    : str.toUpperCase();
};

export default kira;