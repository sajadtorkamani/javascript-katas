/**
 * @param {Array<string>} usernames
 * @returns {boolean}
 */
const authList = usernames => {
  const isValid = username => username.length >= 6 && username.length <= 10
    && /[a-z]/.test(username)
    && /\d/.test(username)
    && username.match(/[^a-z0-9]/) === null;

  return usernames.every(isValid);
};

export default authList;