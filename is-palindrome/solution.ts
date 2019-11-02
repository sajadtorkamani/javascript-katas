const isPalindrome = (str: string): boolean => {
  const reversedStr = str
    .split('')
    .reverse()
    .join('')
    .toLowerCase();

  return reversedStr === str.toLowerCase();
};

export default isPalindrome;