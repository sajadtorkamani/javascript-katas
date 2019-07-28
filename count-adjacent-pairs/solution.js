const countAdjacentPairs = str => {
  return (str.match(/(\b[^ ]+\b)( +(\1)(?=( |$)))+/gi) || []).length;
};

export default countAdjacentPairs;