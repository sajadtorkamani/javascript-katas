const countChar = (str, char) => {
  return (str.match(new RegExp(char, 'gi')) || []).length;
};

export default countChar;