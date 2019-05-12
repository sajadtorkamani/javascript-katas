/**
 * @param num {Number}
 */
const dashatize = num => {
  return num
    .toString()
    .replace(/[13579]/g, m => `-${m}-`)
    .replace(/--/g, '-')
    .replace(/^-/, '')
    .replace(/-$/, '');
};

export default dashatize;