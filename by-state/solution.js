/**
 * @param str {string}
 * @returns {string}
 */
const byState = str => {
  let stateAddresses = {};
  const STATES = {
    'AZ': 'Arizona',
    'CA': 'California',
    'ID': 'Idaho',
    'IN': 'Indiana',
    'MA': 'Massachusetts',
    'OK': 'Oklahoma',
    'PA': 'Pennsylvania',
    'VA': 'Virginia'
  };

  str
    .split('\n')
    .filter(Boolean)
    .forEach(address => {
      const stateCode = address.slice(-2);
      const state = STATES[stateCode];
      const normalizedAddress = address
        .replace(/[A-Z]{2}$/, stateCode => STATES[stateCode])
        .replace(/,/g, '');

      stateAddresses[state] = (stateAddresses[state] || []).concat(normalizedAddress);
    });

  let addressesArr = [];

  for (let state in stateAddresses) {
    const addresses = stateAddresses[state].sort();
    addressesArr.push([state, ...addresses].join('\r\n..... '));
  }

  return addressesArr
    .sort()
    .join('\r\n ');
};

export default byState;