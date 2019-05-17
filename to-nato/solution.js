/**
 * @param str {string}
 */
const to_nato = str => {
  const dictionary = {
    A: 'Alfa', B: 'Bravo', C: 'Charlie', D: 'Delta',
    E: 'Echo', F: 'Foxtrot', G: 'Golf', H: 'Hotel',
    I: 'India', J: 'Juliett', K: 'Kilo', L: 'Lima',
    M: 'Mike', N: 'November', O: 'Oscar', P: 'Papa',
    Q: 'Quebec', R: 'Romeo', S: 'Sierra', T: 'Tango',
    U: 'Uniform', V: 'Victor', W: 'Whiskey', X: 'Xray',
    Y: 'Yankee', Z: 'Zulu'
  };

  return str
    .replace(/\s/g, '')
    .toUpperCase()
    .split('')
    .map(char => /[A-Z]/.test(char) ? dictionary[char] : char)
    .join(' ');
};

export default to_nato;