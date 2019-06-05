/**
 * @param str {string}
 * @param prog {string}
 * @param ver {string}
 * @return {string}
 */
const change = (str, prog, ver) => {
  const lines = str.split('\n');
  const phone = lines[3].split(' ')[1];
  const version = lines[5].split(' ')[1];

  if (!/^\+1-\d{3}-\d{3}-\d{4}$/.test(phone) || !/^\d+\.\d+$/.test(version)) {
    return 'ERROR: VERSION or PHONE';
  }

  return `Program: ${prog} Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: ${version !== '2.0' ? ver : '2.0'}`;
};

export default change;