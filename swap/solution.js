const swap = str => {
  return str.replace(/[aeiou]/g, m => m.toUpperCase());
};

export default swap;