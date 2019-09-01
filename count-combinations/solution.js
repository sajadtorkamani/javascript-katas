const countCombinations = (haystack, needle) => {
  const regex = new RegExp(needle, 'gi');

  return (haystack.match(regex) || []).length;
};

export default countCombinations;
