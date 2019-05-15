/**
 * @param list {Array<string>}
 */
const searchNames = list => {
  let emails = [];

  list
    .filter(Boolean) // Just to pass + feeling lazy...
    .forEach((item, index) => {
      if (index % 2 === 0 && /^\.|\.$/.test(item)) {
        emails.push(list[index + 1]);
      }
    });

  return emails;
};

export default searchNames;