// Probably better way to do this but wanted some regex fun...
const isDigit = (x: string): boolean => {
  return /^-?\d+(\.\d+)?$/.test(x.trim());
};

export default isDigit;
