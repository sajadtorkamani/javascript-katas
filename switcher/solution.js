const switcher = nums => {
  const letters = ' zyxwvutsrqponmlkjihgfedcba!? ';

  return nums
    .map(num => letters[+num])
    .join('')
};

export default switcher;