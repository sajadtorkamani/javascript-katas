const shortForm = (str: string): string => {
  return (
    str.substr(0, 1) +
    str.slice(1, -1).replace(/[aeiou]/gi, '') +
    str.substr(-1)
  );
};

export default shortForm;
