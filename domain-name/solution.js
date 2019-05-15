/**
 * @param url {string}
 */
const domainName = url => {
  return url
    .replace(/https?:\/\/|www\./g, '')
    .split('.')[0];
};

export default domainName;