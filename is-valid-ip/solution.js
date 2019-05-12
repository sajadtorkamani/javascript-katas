const isValidIP = str => {
  const octets = str.split('.');
  const regex = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5]|2[0-4][0-9])$/; // Not the best looking regex...

  return octets.length === 4 && octets.every(octet => regex.test(octet));
};

export default isValidIP;