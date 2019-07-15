export const numberToOrdinal = num => {
  num = num.toString();

  switch (true) {
    case num === '0':
      return num;
    case /11|12|13$/.test(num):
      return `${num}th`;
    case /1$/.test(num):
      return `${num}st`;
    case /2$/.test(num):
      return `${num}nd`;
    case /3$/.test(num):
      return `${num}rd`;
    default:
      return `${num}th`;
  }
};
