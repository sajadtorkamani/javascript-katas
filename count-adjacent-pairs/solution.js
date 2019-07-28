// This regex is definitely too complex but it's 1am...
const countAdjacentPairs = str => {
  return (str.match(/(\b[^ ]+\b)( +(\1)(?=( |$)))+/gi) || []).length;
};

export default countAdjacentPairs;
